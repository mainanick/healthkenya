import json
import os
import time
import typing

import requests

DEFAULT_PAGE_SIZE: int = 10000
HEALTH_TOKEN = os.environ.get("HEALTH_TOKEN", None)


class HealthKenya:
    def __init__(self, token=HEALTH_TOKEN, page_size=DEFAULT_PAGE_SIZE):
        if token is None:
            print("Provide token")
            exit(1)
        self.api_token = token
        self.default_page_size = page_size
        self.api_url = "http://api.kmhfl.health.go.ke/api/"

    def default_headers(self):
        return {
            "Authorization": f"Bearer {self.api_token}",
            "Origin": "http://kmhfl.health.go.ke",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 OPR/65.0.3467.78",
            "Referer": "http://kmhfl.health.go.ke/",
            "Accept": "application/json, */*",
        }

    def get_request(self, path: str, **kwargs):
        headers = kwargs.pop("headers", self.default_headers())
        r = requests.get(
            f"{self.api_url}{path}", headers=self.default_headers(), **kwargs
        )
        return r

    def get_county_facilities(
        self, county_id: str, page_size: int = DEFAULT_PAGE_SIZE
    ) -> dict:
        fields = "id,code,name,regulatory_status_name,facility_type_name,owner_name,county,constituency,ward_name,keph_level,operation_status_name"
        r = self.get_request(
            f"facilities/material/?fields={fields}&county={county_id}&page_size={page_size}"
        )
        return r.json()


def get_counties() -> typing.List:
    counties = []
    with open("dataset/counties.json") as f:
        counties = json.load(f)
    return counties


def collect_facilities_per_county():
    counties = get_counties()
    healthAPI = HealthKenya()
    for county in counties:
        county_name: str = county["name"]
        county_id: str = county["id"]
        try:
            facilities = healthAPI.get_county_facilities(county_id)
            with open(
                f"dataset/county_facilities/{county_name.lower()}.json", "w"
            ) as f:
                json.dump(facilities, f)
        except Exception as e:
            print(e)
            print(f"Failed to collect health data for {county_name} County")

        # sleep for 500ms. 47counties takes around 30sec
        time.sleep(0.5)


if __name__ == "__main__":
    collect_facilities_per_county()
