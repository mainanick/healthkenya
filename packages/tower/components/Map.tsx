import React, { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";

interface Marker {
  lat: string;
  long: string;
  name?: string;
  registration_number?: string;
}

interface MapProps {
  width?: string;
  height?: string;
  latitude?: number;
  longitude?: number;
  zoom?: number;
  markers?: Marker[];
}

class Markers extends React.Component<{ data: Marker[] }> {
  render() {
    const { data } = this.props;
    if (!data || !data.length) {
      console.log(data);
      return null;
    }
    const elements = data.map((d, i) => {
      const dlat = Number.parseFloat(d.lat);
      const dlong = Number.parseFloat(d.long);
      if (!Number.isNaN(dlat) || !Number.isNaN(dlong)) {
        return (
          <Marker key={i} longitude={dlat} latitude={dlong}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "10px",
                background: "red",
              }}
              onClick={() => console.log(d.name)}
            >
              {d.lat}
            </div>
          </Marker>
        );
      }
      return null;
    });
    return elements;
  }
}

function Map(props: MapProps) {
  const { markers, ...others } = props;
  const [viewport, setViewport] = useState(others);
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/dark-v10"
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      onViewportChange={(v) => {
        setViewport({ ...viewport, ...v });
      }}
      {...viewport}
    >
      <Markers data={markers} />
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <NavigationControl />
      </div>
    </ReactMapGL>
  );
}
export default Map;
