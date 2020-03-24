import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

function Index() {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/mainanick/healthkenya/master/dataset/county_facilities/nairobi.json",
        { method: "GET" }
      );
      const data = await res.json();
      setFacilities(data.results);
    };
    fetchData();
  }, []);
  if (facilities.length > 2) {
    return (
      <main>
        <div style={{ display: "flex" }}>
          <div style={{ height: "100vh", width: "20%" }}>Hello</div>
          <div style={{ height: "100vh", width: "80%" }}>
            <Map
              width={"100%"}
              height={"100vh"}
              latitude={-1.28333}
              longitude={36.81667}
              zoom={14}
              markers={facilities}
            />
          </div>
        </div>
      </main>
    );
  }
  return null;
}

export default Index;
