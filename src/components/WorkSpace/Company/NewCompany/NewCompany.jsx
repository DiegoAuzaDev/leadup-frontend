/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CreateNewCompany from "../../../../utils/company/createNewCompany";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
function NewCompany() {
  const [newCompnay, setNewCompany] = useState(null);
  const [error, setError] = useState(null);
  const [companyName, setCompany] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [country, setCountry] = useState("CO");
  const [markerCenter, setMarkerCenter] = useState(null);
  const validCompanyName = (name) => {};
  const validCompanyLocation = (location) => {};

  const validGeopointToAddress = () => {
    // todo
  };

  return (
    <>
      <section>
        <div>
          <h1>Create a new company</h1>
          <p>Getting started is easier than you expected</p>
        </div>
        <div>
          <form action=""></form>
        </div>
        <div className=" h-[50vh] bg-gray-700">
          <PickLocationOnMap
            setMarkerCenter={setMarkerCenter}
            markerCenter={markerCenter}
          />
        </div>
      </section>
    </>
  );
}

function PickLocationOnMap({ markerCenter, setMarkerCenter }) {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API;
  const defaultCenter = {
    lat: 4.671547178629467,
    lng: -74.09684144291316,
  };
  return (
    <APIProvider apiKey={GOOGLE_API_KEY}>
      <Map
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={"1fc0053bbd3b1430"}
        defaultZoom={16}
        defaultCenter={defaultCenter}
        maxZoom={20}
        onClick={(ev) => {
          setMarkerCenter(ev.detail.latLng);
        }}
      >
        {markerCenter && (
          <AdvancedMarker
            draggable={true}
            onDragEnd={(ev) => {
              setMarkerCenter({
                lat: ev.latLng.lat(),
                lng: ev.latLng.lng(),
              });
            }}
            position={markerCenter}
          ></AdvancedMarker>
        )}
      </Map>
    </APIProvider>
  );
}

PickLocationOnMap.propTypes = {
  markerCenter: PropTypes.object,
  setMarkerCenter: PropTypes.func,
};

export default NewCompany;
