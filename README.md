# healthkenya

![Calver-YYYY.0M.0D.Minor](https://img.shields.io/badge/Last_Updated-08/Jan/2020-green)

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
  "code": 24918,
  "name": "The Nairobi Hospital Rosslyn Riviera Out Patient Centre",
  "officialname": "The Nairobi Hospital Rosslyn Riviera Out Patient Centre",
  "registration_number": null,
  "keph_level_name": "Level 3",
  "facility_type_name": "Medical Center",
  "facility_type_category": "MEDICAL CENTRE",
  "county": "95b08378-362e-4bf9-ad63-d685e1287db2",
  "constituency": "b082b823-9027-4b9e-8426-bc520d90480b",
  "ward": "c6e7c661-6749-4126-8b30-e97c2ab20996",
  "owner_name": "Private Practice - General Practitioner",
  "owner_type_name": "Private Practice",
  "regulatory_body_name": null,
  "beds": 0,
  "cots": 0,
  "search": null,
  "county_name": "Nairobi",
  "constituency_name": "Westlands",
  "sub_county": "49a83cf0-1067-4339-9c4a-6198c02b40e6",
  "sub_county_name": "Westlands",
  "ward_name": "Karura",
  "keph_level": "174f7d48-3b57-4997-a743-888d97c5ec31",
  "facility_type": "188551b7-4f22-4fc4-b07b-f9c9aeeea872",
  "owner_type": "d9a0ce65-baeb-4f3b-81e3-083a24403e92",
  "owner": "5363e7ac-2728-4099-9f5b-da14e2ee83d0",
  "operation_status": "ae75777e-5ce3-4ac9-a17e-63823c34b55e",
  "operation_status_name": "Operational",
  "open_whole_day": false,
  "open_public_holidays": true,
  "open_weekends": true,
  "open_late_night": false,
  "services": [
    "1a536286-c5b9-46f4-a72f-919c1fccb8e8",
    "175f9481-9e91-481a-aa47-173e790c41df",
    "49f4af68-6a24-4348-afdd-7e47e225ed33",
    "1af603d5-f675-48d0-8a27-5c1b7867987d",
    "823445bb-f2c4-4692-ba79-8bc68a70cdb6",
    "e9b6d8ff-c708-4055-918c-3fe518ffe49b",
    "04924a6b-1355-4cff-89fe-980da6782794",
    "5afb8ee9-a603-48d1-89f5-48b80310d3be",
    "437ee289-6c70-4c08-b0b6-8f6409fca992",
    "c9162cc6-2e14-42ca-9014-96826e97c5fc",
    "8bfb7f08-f301-4daa-b2c8-5caec49abdfe",
    "dc6d566f-99d6-4cc8-9f9e-4bd2f608d822",
    "725ec11e-a9e0-4887-924a-88c21f5e53bd",
    "08fffb33-be96-4576-83fd-bcaa59610ec2",
    "595d129b-1b11-453d-a9d1-428297805872",
    "01f8c798-86ac-4a44-9342-2e7aa1ef2615",
    "5e40c92b-0817-4c0d-a318-2bf902b5c014",
    "50a08e32-ff66-47e2-8e7f-130be6ef0c9f",
    "71980cff-b8e7-4a07-9eb8-d12fc49707a8",
    "1035a26a-3e31-468e-ae03-e0a488eee01a",
    "8ebf7fc6-6a8d-4d1e-9a36-d68f59060dd4",
    "969d5083-e88f-4109-8048-948e64ad0f7f",
    "bc51043e-750a-46cf-bf88-8bf18a36f9b7",
    "368c963a-b8de-461b-aa82-5ee1b0c0e391",
    "de7c5fea-f358-4f2e-8cb4-517a3fcc3bf6"
  ],
  "categories": [
    "9614d93b-1695-486e-85bd-4df0c4571b01",
    "36d2f7a8-41b3-40f8-8943-e513fa28c8db",
    "281fa080-27a0-46aa-b1e5-1e0a69146c09",
    "f312d0b2-5e41-4587-b54d-ff1d1bc128c6",
    "f9841f9a-e435-4bbe-b52e-ac71668af4dc",
    "ed4c8e0c-865e-4c31-8ff8-24b1f4caedf7",
    "5e5201c1-1b06-4981-9c78-d652b87f060b",
    "731362b6-7769-480d-be85-23cb895c5525",
    "71e0e86e-bd52-40d5-8f30-3afc9f491840",
    "2bd4d89c-f532-4ac0-97d4-7e235f199b12",
    "16917242-1f97-493c-9fc5-36d4184fa7b5",
    "9bd7424e-c333-471f-974d-6f8283fa263c",
    "4da1bda7-0f22-4aab-ae23-4c86d206dfaf"
  ],
  "service_names": [
    "General X-ray",
    "Accident and Emergency casualty Services",
    "Integrated Management of Childhood Illnesses",
    "Integrated Child Immunization",
    "TT toxoid for Pregnant Women",
    "Postnatal care services",
    "Hospital - Retail services",
    "Natural",
    "Focused Antenatal Care",
    "Long Term",
    "Utra-Sound",
    "Vaccination services given to travellers",
    "Paediatric outpatient clinic",
    "Basic Emergency Preparedness",
    "Breast",
    "Class E",
    "Outpatient",
    "Screening using VIA/VILI",
    "Short Term",
    "Permanent",
    "Surgical outpatient clinic",
    "Medical Outpatient Clinic",
    "Gynaecology",
    "Specialised ANC",
    "Pap smear"
  ],
  "approved": true,
  "is_public_visible": true,
  "created": "2019-06-14T08:55:37.823235Z",
  "closed": false,
  "is_published": true,
  "id": "df114bb1-ac49-47cf-8fb6-96c4f632f5e8",
  "lat": "36.799454",
  "long": "-1.216311"
}
```
