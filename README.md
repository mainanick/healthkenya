# healthkenya

Data collected from [Kenya Master Health Facility List](http://kmhfl.health.go.ke)

To get the api token

- Open [Kenya Master Health Facility List Facility Filter Page](http://kmhfl.health.go.ke/#/facility_filter)
- Open Dev console and go to the Network Page
- Do a blank search on facility filter webpage
- On the Network-Console and click on any request calling http://api.kmhfl.health.go.ke
- The token is the value of Authorization header

Facility Object

```json
{
  "code": 1,
  "name": "Siloam Hospital LTD Bomet",
  "officialname": "Siloam Hospital LTD Bomet",
  "registration_number": "008768",
  "keph_level_name": "Level 2",
  "facility_type_name": "Medical Clinic",
  "facility_type_category": "MEDICAL CLINIC",
  "county": "cea1878f-be8a-46f9-9b3b-b6089977892f",
  "constituency": "2d2b8e6f-d642-49b0-89b5-835a610fc82d",
  "ward": "b3e7c2c5-2761-4e1d-9100-52b1b6135a22",
  "owner_name": "Private Practice - Private Company",
  "owner_type_name": "Private Practice",
  "regulatory_body_name": "Kenya MPDB",
  "beds": 0,
  "cots": 0,
  "search": null,
  "county_name": "Bomet",
  "constituency_name": "Chepalungu",
  "sub_county": "b50fdc6f-e693-4f99-ab73-26fe74acd069",
  "sub_county_name": "Chepalungu",
  "ward_name": "Nyangores",
  "keph_level": "ceab4366-4538-4bcf-b7a7-a7e2ce3b50d5",
  "facility_type": "5eb392ac-d10a-40c9-b525-53dac866ef6c",
  "owner_type": "d9a0ce65-baeb-4f3b-81e3-083a24403e92",
  "owner": "56937bed-ea04-4306-bdf9-86668eb570c7",
  "operation_status": "ae75777e-5ce3-4ac9-a17e-63823c34b55e",
  "operation_status_name": "Operational",
  "open_whole_day": true,
  "open_public_holidays": false,
  "open_weekends": false,
  "open_late_night": false,
  "services": [
    "04924a6b-1355-4cff-89fe-980da6782794",
    "5afb8ee9-a603-48d1-89f5-48b80310d3be"
  ],
  "categories": [
    "731362b6-7769-480d-be85-23cb895c5525",
    "4da1bda7-0f22-4aab-ae23-4c86d206dfaf"
  ],
  "service_names": ["Focused Antenatal Care", "Outpatient"],
  "approved": true,
  "is_public_visible": true,
  "created": "2019-11-14T09:37:38.908747Z",
  "closed": false,
  "is_published": true,
  "id": "d0a21716-c65a-4748-8147-7d02c4d4bd2a",
  "lat": "35.33999999",
  "long": "-0.79220001"
}
```
