import fs from "fs";
import chalk from "chalk";
import fetch from "node-fetch";
import puppeteer from "puppeteer";

(async () => {
  const counties: { id: string; name: string }[] = JSON.parse(
    fs.readFileSync("dataset/counties.json", "utf8")
  );

  async function getRequestHeaders() {
    let headers: Record<string, string>;
    const browser = await puppeteer.launch({
      defaultViewport: { width: 1920, height: 1080 }
    });
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", interceptedRequest => {
      if (interceptedRequest.url().includes("//api.kmhfl.health.go.ke")) {
        if ("authorization" in interceptedRequest.headers()) {
          headers = interceptedRequest.headers();
          console.log(chalk.green(`Intercepted Request`));
        }
      }
      interceptedRequest.continue();
    });
    await page.goto("http://kmhfl.health.go.ke/#/facility_filter", {
      waitUntil: "networkidle0"
    });

    await browser.close();
    return headers;
  }

  const headers = await getRequestHeaders();

  async function request(countyID: string, pageSize: number = 30000) {
    const fields =
      "id,code,name,regulatory_status_name,facility_type_name,owner_name,county,constituency,ward_name,keph_level,operation_status_name";
    try {
      const res = await fetch(
        `http://api.kmhfl.health.go.ke/api/facilities/material/?fields=${fields}&county=${countyID}&page_size=${pageSize}`,
        { method: "GET", headers }
      );
      const data = await res.json();
      return data;
    } catch (e) {
      return null;
    }
  }

  counties.map(async county => {
    const facilities: Array<any> = await request(county.id);
    fs.writeFile(
      `dataset/county_facilities/${county.name.toLowerCase()}.json`,
      JSON.stringify(facilities),
      err => {
        if (err) {
          console.log(
            chalk.red(`Failed writing to file  ${county.name} Facilities\n`)
          );
        } else {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(`Downloaded ${county.name} Facilities`);
        }
      }
    );
  });
})();

export default "health";
