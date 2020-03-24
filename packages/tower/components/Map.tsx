import React, { useState, useEffect, SVGProps } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";

interface Marker {
  lat: string;
  long: string;
  name?: string;
  facility_type_name?: string;
}

interface MapProps {
  width?: string;
  height?: string;
  latitude?: number;
  longitude?: number;
  zoom?: number;
  markers?: Marker[];
}

const Pin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <defs />
    <path d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z" />
  </svg>
);
class Markers extends React.Component<{ data: Marker[] }> {
  getPinColor = (type: string) => {
    switch (type.trim()) {
      case "Medical Clinic":
      case "MEDICAL CLINIC":
      case "HEALTH CENTRE":
      case "Medical Center":
      case "STAND ALONE":
      case "Primary care hospitals":
      case "Comprehensive health Centre":
      case "Basic Health Centre":
      case "Specialized & Tertiary Referral hospitals":
      case "HOSPITALS":
        return "#6b46c1";
      case "Dermatology":
        return "#9c4221";
      case "Dispensary":
      case "Pharmacy":
        return "#48bb78";
      case "Dental Clinic":
        return "#ffffff";
      case "Ophthalmology":
        return "#d53f8c";
      default:
        return "#2b6cb0";
    }
  };
  render() {
    const { data } = this.props;
    if (!data || !data.length) {
      console.log(data);
      return null;
    }
    const elements = data.reduce((arr, d, i) => {
      const dlat = Number.parseFloat(d.lat);
      const dlong = Number.parseFloat(d.long);
      if (!Number.isNaN(dlat) || !Number.isNaN(dlong)) {
        const pinColor = this.getPinColor(d.facility_type_name);
        arr.push(
          <Marker key={i} longitude={dlat} latitude={dlong}>
            <Pin
              height="20px"
              width="20px"
              fill={pinColor}
              onClick={() => console.log(d.name)}
            />
          </Marker>
        );
      }
      return arr;
    }, []);
    return elements;
  }
}

function Map(props: React.PropsWithChildren<MapProps>) {
  const { markers, ...others } = props;
  const [viewport, setViewport] = useState(others);

  useEffect(() => {
    setViewport(others);
  }, [others.latitude, others.longitude, others.zoom]);

  return (
    <ReactMapGL
      reuseMaps
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
      {props.children}
    </ReactMapGL>
  );
}
export default Map;
