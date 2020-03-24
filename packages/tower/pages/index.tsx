import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Select from "react-select";

import counties from "../../data/dataset/counties.json";

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
  counties,
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
  }, [state.selectedCounty.name]);

  const handleChange = (option) =>
    setState({ ...state, selectedCounty: option });

  if (state.facilities.length > 2) {
    return (
      <main>
        <div className="flex">
          <div style={{ height: "100vh", width: "100vw" }}>
            <Map
              width={"100%"}
              height={"100vh"}
              latitude={-1.28333}
              longitude={36.81667}
              zoom={14}
              markers={state.facilities}
            >
              <div
                className="p-3"
                style={{
                  position: "absolute",
                  borderRadius: "6px",
                  background: "white",
                  top: "20px",
                  left: "20px",
                  width: "200px",
                }}
              >
                <div className="font-medium">Countries</div>
                <Select
                  value={state.selectedCounty}
                  onChange={handleChange}
                  options={state.counties}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.name}
                />
                <span className="mt-2">Total: {state.facilities.length}</span>
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
