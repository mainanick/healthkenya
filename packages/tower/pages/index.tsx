import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Select from "react-select";

import summaries from "../../data/dataset/summaries.json";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

interface County {
  id?: string;
  name: string;
}

interface Facility {
  name: string;
  lat: string;
  long: string;
}
interface State {
  counties: County[];
  selectedCounty: County;
  facilities: Facility[];
}

const initialState = {
  counties: summaries.county,
  selectedCounty: { name: "Nairobi" },
  facilities: [],
};

function Index() {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://raw.githubusercontent.com/mainanick/healthkenya/master/packages/data/dataset/county_facilities/${state.selectedCounty.name.toLowerCase()}.json`,
        { method: "GET" }
      );
      const data = await res.json();
      setState({ ...state, facilities: data.results });
    };
    fetchData();
    return () => {};
  }, [state.selectedCounty.name]);

  const handleChange = (option) =>
    setState({ ...state, selectedCounty: option });

  const getMidCoordFromPoints = (points: { lat?: string; long?: string }[]) => {
    //Get two points from point array with none NaN long or lat
    const arr: { lat: number; long: number }[] = [];
    let i = 0;
    while (i < 3) {
      const plong = Number.parseFloat(points[i].long);
      const plat = Number.parseFloat(points[i].lat);
      if (Number.isNaN(plat) || Number.isNaN(plong)) {
        continue;
      }
      arr.push({ lat: plat, long: plong });
      i++;
    }
    return arr.pop();
  };

  if (state.facilities.length) {
    const { lat: midLat, long: midLong } = getMidCoordFromPoints(
      state.facilities
    );
    console.log("Rendered");
    return (
      <main>
        <div className="flex">
          <div style={{ height: "100vh", width: "100vw" }}>
            <Map
              width={"100%"}
              height={"100vh"}
              latitude={midLong}
              longitude={midLat}
              zoom={13}
              markers={state.facilities}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  width: "200px",
                }}
              >
                <Select
                  value={state.selectedCounty}
                  onChange={handleChange}
                  options={state.counties}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.name}
                />
              </div>
            </Map>
          </div>
        </div>
      </main>
    );
  }
  return null;
}

export default Index;
