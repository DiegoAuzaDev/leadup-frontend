/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import PickLocationOnMap from "../../MapComponent/PickLocationOnMap";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function EditCompany({ companyCollection, selectedCompanyId, setCompanyData }) {
  const findSelectedCompanyById = companyCollection.find(
    ({ _id }) => _id == selectedCompanyId
  );
  if (!findSelectedCompanyById) {
    location.href = "/workspace/company";
  }
  const [newMarkerPosition, setNewMarkerPosition] = useState({
    lat: Number(findSelectedCompanyById.location.latitude),
    lng: Number(findSelectedCompanyById.location.longitude),
  });

  const [name, setName] = useState(findSelectedCompanyById.name);
  const [nameError, setNameError] = useState();
  const [address, setAddress] = useState(findSelectedCompanyById.address);
  const [addresError, setAdrressError] = useState();
  const [error, setError] = useState();
  const [country, setCountry] = useState(findSelectedCompanyById.country);
  const [phoneNumber, setPhoneNumber] = useState(
    findSelectedCompanyById.phoneNumber[0]
  );
    const [phoneNumberError, setPhoneNumberError] = useState("");
  const handleSubmitEvent = async (ev) => {
    ev.preventDefault();
    const companyObj = {
      name: name.trim(),
      address: address.trim(),
      country: country,
      phoneNumber: phoneNumber,
    };
  };
  const validCompanyName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must contain at least 3 characters";
    }
    return "";
  };
  const handleCompanyName = (ev) => {
    const value = ev.target.value;
    setName(value);
    setNameError(validCompanyName(value));
  };
  const handleCompanyInputLocation = (ev) => {
    const value = ev.target.value;
    setAddress(value);
    setAdrressError(validCompanyInputLocation(value));
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
  return (
    <>
      <div>
        <h2 className="text-3xl md:text-3xl lg:text-3xl">
          Updating your data has never been easier
        </h2>
        <p>
          In order to update your company data, you need to provide a valid
          name, address, and phone number.
        </p>
      </div>
      <div
        className="flex-1 gap-3 flex flex-col lg:flex-row-reverse md:gap-x-10 lg:justify-end"
        // style={{ justifyContent: "flex-end" }}
      >
        <div className=" h-[50vh] lg:h-auto flex flex-col w-auto lg:w-1/2">
          <p>
            Drag and drop the marker on the map to change the location of{" "}
            <span className=" underline text-sky-800">
              {findSelectedCompanyById.name}
            </span>
            then click on save changes
          </p>
          <div className="bg-gray-200 rounded-md flex-1 z-[0] p-2 h-11">
            <PickLocationOnMap
              setMarkerCenter={setNewMarkerPosition}
              markerCenter={newMarkerPosition}
            />
          </div>
        </div>

        <form onSubmit={handleSubmitEvent} className="  md:flex flex-col">
          {error && (
            <div className=" bg-red-400 p-4 rounded-md mb-6 flex flex-col gap-2 text-sky-950">
              <p className="m-0 font-medium">
                There was an error udpdating the data
              </p>
              <p className="m-0">
                {"Error message: "}{" "}
                <span className=" underline font-bold">{error}</span>
              </p>
              <p className="m-0">
                Double check the data you want to update and try again
              </p>
            </div>
          )}
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
                value={name}
                onChange={handleCompanyName}
              />
              {nameError && (
                <small className=" text-red-500">{nameError}</small>
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
                value={address}
                onChange={handleCompanyInputLocation}
              />
              {addresError && (
                <small className=" text-red-500">{addresError}</small>
              )}
            </label>
          </fieldset>
          <fieldset className="mt-4 mb-6">
            <legend className=" font-semibold text-gray-800">
              Phone Number
            </legend>
            <label className=" flex flex-col gap-2 my-5">
              <small className=" text-gray-600">
                Your employees will use this phone number if they have any issue
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
          <div className="flex gap-2 flex-col md:flex-row ">
            <button className="btn grow">Save changes</button>
            <NavLink
              className="btn grow btn--outline"
              to={"/workspace/company"}
            >
              Cancel
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

EditCompany.propTypes = {
  companyCollection: PropTypes.array,
  selectedCompanyId: PropTypes.string,
  setCompanyData: PropTypes.func,
};

export default EditCompany;
