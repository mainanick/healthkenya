import json
import os
import time
import typing

import requests


def default_headers() -> dict:
    auth_token = os.environ.get("HEALTH_TOKEN", "")
    return {
        "Authorization": f"Bearer {auth_token}",
        "Origin": "http://kmhfl.health.go.ke",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 OPR/65.0.3467.78",
        "Referer": "http://kmhfl.health.go.ke/",
        "Accept": "application/json, */*",
    }


def get_counties() -> typing.List:
    counties = []
    with open("dataset/counties.json") as f:
        counties = json.load(f)
    return counties


def collect_facilities_per_county():
    counties = get_counties()
    for county in counties:
        county_name: str = county["name"]
        county_id: str = county["id"]
        url = f"http://api.kmhfl.health.go.ke/api/facilities/material/?fields=id,code,name,regulatory_status_name,facility_type_name,owner_name,county,constituency,ward_name,keph_level,operation_status_name&county={county_id}&page_size=10000"
        try:

            r = requests.get(url, headers=default_headers())
            with open(
                f"dataset/county_facilities/{county_name.lower()}.json", "w"
            ) as f:
                json.dump(r.json(), f)
        except Exception:
            print(f"Failed to collect health data for {county_name} County")

        # sleep for 500ms. 47counties takes around 30sec
        time.sleep(0.5)


if __name__ == "__main__":
    collect_facilities_per_county()
