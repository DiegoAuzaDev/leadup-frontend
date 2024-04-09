/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import createNewCompany from "../../../../utils/company/createNewCompany";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faL } from "@fortawesome/free-solid-svg-icons";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { geocodeToAddressKey } from "../../../../utils/keys";
import { useToken } from "../../../../context/tokenContext";
import PickLocationOnMap from "../../MapComponent/PickLocationOnMap";
function NewCompany() {
  const [{ companyData, setCompanyData }] = useOutletContext();
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useToken();
  const navigate = useNavigate();
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
      console.log(geopointToAddress.message);
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
    setError(null);
    setIsLoading(true)
    ev.preventDefault();
    const companyObj = {
      name: companyName.trim(),
      address: companyLocation.trim(),
      country: country,
      phoneNumber: phoneNumber,
    };
    const newCompanyResponse = await createNewCompany(companyObj, token);

    setIsLoading(false)
    if (newCompanyResponse instanceof Error) {
      setError("There was an error creating new a company");
    } else {
      setCompanyData([...companyData, newCompanyResponse]);
      navigate("/workspace/company");
    }
  };

  return (
    <>
      <section>
        <div>
          <h1 className="m-0 text-3xl md:text-3xl lg:text-3xl">
            Create a new company
          </h1>
          <p>Getting started is easier than you expected</p>
        </div>
        {error && (
          <div className=" bg-red-400  rounded-md py-3 px-2">
            <p className="m-0">{error}</p>
              <ul className="m-0 list-disc px-6">
                <li>
                  <small>duplicate name, try a different name</small>
                </li>
                <li>
                  <small>Try again later</small>
                </li>
              </ul>
          </div>
        )}
        {isLoading && <LoadingIndicator />}
        {!isLoading && (
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

              <div className="bg-gray-200 p-2 rounded-md">
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
        )}
      </section>
    </>
  );
}

function LoadingIndicator() {
  return (
    <div className="bg-gray-200 p-2 rounded-md flex justify-center flex-col items-center py-7 h-3/6">
      <div role="status" className=" h-5 w-5">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-400 animate-spin  fill-sky-600 self-center"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
      <p className="m-2">Loading</p>
      <small className="m-0">Validating your company information...</small>
    </div>
  );
}

export default NewCompany;
