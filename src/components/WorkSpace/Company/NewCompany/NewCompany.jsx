/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import {  useState } from "react";
import PropTypes from "prop-types";
import createNewCompany from "../../../../utils/company/createNewCompany";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { geocodeToAddressKey } from "../../../../utils/keys";
import { useToken } from "../../../../context/tokenContext";
function NewCompany() {
  const [token, setToken] = useToken();
  const [country, setCountry] = useState("CO");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [error, setError] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyLocationInputError, setCompanyLocationInputError] =
    useState("");
  const [markerCenter, setMarkerCenter] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const validCompanyName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must contain at least 3 characters";
    }
    return "";
  };
  const validCompanyInputLocation = (addressInput) => {
    const locationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!addressInput.trim()) {
      return "Company location is required";
    } else if (!locationRegex.test(addressInput)) {
      return "Invalid location";
    } else {
      return "";
    }
  };

  const handleCompanyName = (ev) => {
    const value = ev.target.value;
    setCompanyName(value);
    setCompanyNameError(validCompanyName(value));
  };
  const handleCompanyInputLocation = (ev) => {
    const value = ev.target.value;
    setCompanyLocation(value);
    setCompanyLocationInputError(validCompanyInputLocation(value));
  };

  const validCompanyLocation = async (location) => {
    let lat = location.lat;
    let lng = location.lng;
    let requestUrl = geocodeToAddressKey(lat, lng);
    const geopointToAddress = await sendLocationRequest(requestUrl);
    if (typeof geopointToAddress == "string") {
      setCompanyLocation(geopointToAddress);
      setCompanyLocationInputError("");
      setError(null);
    } else {
      console.log(geopointToAddress.message)
      setError(geopointToAddress.message);
    }
  };
  const sendLocationRequest = async (url) => {
    let returnResponse = null;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      if (data.error_message) {
        throw new Error("Invalid request");
      }
      returnResponse = data.results[1].formatted_address;
    } catch (error) {
      returnResponse = new Error(error.message);
    }
    return returnResponse;
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const companyObj = {
      name: companyName.trim(),
      address: companyLocation.trim(),
      country: country,
      phoneNumber: phoneNumber,
    };
    const newCompanyResponse = await createNewCompany(companyObj, token);
  };

  return (
    <>
      <section>
        <div>
          <h1>Create a new company</h1>
          <p>Getting started is easier than you expected</p>
        </div>
        {error && (
          <div className=" bg-red-400 p-4 rounded-md">
            <p className="m-0">
              There was an error creating the company
            </p>
            <small>Try again later</small>
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <fieldset className="mt-4 mb-6">
              <legend className=" font-semibold text-gray-800">
                Company Name *
              </legend>
              <label className=" flex flex-col gap-2">
                <small className=" text-gray-600">
                  The name of your company must be unique
                </small>
                <input
                  required
                  type="text"
                  className="border-gray-400 border-2 rounded-md leading-8 px-2"
                  value={companyName}
                  onChange={handleCompanyName}
                />
                {companyNameError && (
                  <small className=" text-red-500">{companyNameError}</small>
                )}
              </label>
            </fieldset>
            <fieldset className="mt-4 mb-6">
              <legend className=" font-semibold text-gray-800">
                Company Address *
              </legend>
              <label className=" flex flex-col gap-2">
                <small className=" text-gray-600">
                  The company address must contain city or departments
                </small>
                <input
                  required
                  type="text"
                  className="border-gray-400 border-2 rounded-md leading-8 px-2"
                  value={companyLocation}
                  onChange={handleCompanyInputLocation}
                />
                {companyLocationInputError && (
                  <small className=" text-red-500">
                    {companyLocationInputError}
                  </small>
                )}
              </label>
            </fieldset>
            <fieldset className="mt-4 mb-6">
              <legend className=" font-semibold text-gray-800">
                Phone Number
              </legend>
              <label className=" flex flex-col gap-2">
                <small className=" text-gray-600">
                  Your employees will use this phone number if they have any
                  issue
                </small>
                <div>
                  <input
                    required
                    type="tel"
                    className="border-gray-400 border-2 rounded-md leading-8 px-2"
                    value={phoneNumber}
                    onChange={(ev) => {
                      const value = ev.target.value;
                      const locationRegex = /^\d+$/;
                      setPhoneNumber(value.trim());
                      if (!locationRegex.test(value)) {
                        setPhoneNumberError("Please enter only digits (0-9)");
                      } else if (value.length < 5) {
                        setPhoneNumberError(
                          "Numbers must be longer than 5 characters"
                        );
                      } else {
                        setPhoneNumberError("");
                      }
                    }}
                  />
                </div>
                {phoneNumberError && (
                  <small className=" text-red-500">{phoneNumberError}</small>
                )}
              </label>
            </fieldset>
          </div>

          <div className="bg-gray-200 p-2">
            <div className="relative mb-3">
              <h6 className="mb-0">
                <a
                  type="button"
                  className="relative flex justify-between items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                  data-collapse-target="collapse-1"
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                >
                  <span>Pick location on Map</span>
                  <i>
                    <FontAwesomeIcon
                      icon={!isActive ? faChevronDown : faChevronUp}
                      className=" self-center"
                      style={{ color: "#4b5563" }}
                    />
                  </i>
                </a>
              </h6>
              <div
                data-collapse="collapse-1"
                className={`${
                  !isActive ? "h-[0vh]" : "h-[70vh]"
                } overflow-hidden transition-all duration-300 ease-in-out`}
              >
                <div className="h-[inherit] text-sm leading-normal text-blue-gray-500/80 flex flex-col gap-4">
                  <div className=" flex-1 rounded-md overflow-hidden">
                    <PickLocationOnMap
                      setMarkerCenter={setMarkerCenter}
                      markerCenter={markerCenter}
                    />
                  </div>
                  <a
                    className={`${
                      !markerCenter
                        ? "btn--outline hover:rounded-md focus:rounded-md active:rounded-md"
                        : "btn"
                    }`}
                    onClick={() => {
                      if (markerCenter) {
                        validCompanyLocation(markerCenter);
                      }
                    }}
                  >
                    Find location
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className={`${
              !phoneNumberError &&
              !companyLocationInputError &&
              !companyNameError
                ? "btn"
                : "btn--outline"
            }`}
            onClick={(ev) => {
              ev.preventDefault();
              if (
                !phoneNumberError &&
                phoneNumber && 
                !companyLocationInputError &&
                companyLocation &&
                !companyNameError && 
                companyName
              ) {
                handleSubmit(ev);
              } 
            }}
          >
            Create company
          </button>
        </form>
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
        defaultZoom={10}
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
