/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEnvelope,
  faFileEdit,
  faFolderOpen,
  faListCheck,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import MapComponent from "../MapComponent/MapComponent";
import PropTypes from "prop-types";
//
import { NavLink, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
function DashBoard() {
  const [{ userData, companyData, error }] = useOutletContext();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [arrayCompany, setArrayCompany] = useState(null);
  const [errorData, setErrorData] = useState(null);
  useEffect(() => {
    if (companyData != null) {
      setArrayCompany(companyData);
      if (companyData.length != 0) {
        setSelectedCompany(companyData[0]);
      } else {
        setSelectedCompany({});
      }
    }
    if (error) {
      setErrorData(error);
    }
  }, [userData, companyData, error]);
  return (
    <>
      <div className=" flex flex-col gap-8 lg:flex-row md:flex-1 md:gap-4">
        <section className=" flex  flex-col lg:w-1/3 md:gap-7 md:flex-row lg:flex-col">
          <div className=" lg:mb-4 md:w-1/2 lg:w-[auto]">
            <div className="mb-4">
              <h2 className="m-0 text-3xl md:text-3xl lg:text-3xl">
                Dashboard
              </h2>
              <small>Sync your team with your routes</small>
            </div>
            <div
              className={`${
                !arrayCompany && !errorData ? "animate-pulse" : " animate-none"
              } transition-all ease-in-out duration-500 bg-gray-200 rounded-md min-h-[190px]  flex flex-col gap-5 px-3 py-5`}
            >
              {!arrayCompany && !errorData && <ArrayComapyLoadingIndicator />}
              {!arrayCompany && errorData && <ArrayCompanyErrorState />}
              {arrayCompany != null &&
                arrayCompany.length == 0 &&
                !errorData && <ArrayCompanyEmptyState />}
              {arrayCompany != null &&
                arrayCompany.length != 0 &&
                !errorData && (
                  <ArrayCompanyDisplayList
                    selectedCompany={selectedCompany}
                    setSelectedCompany={setSelectedCompany}
                    arrayCompany={arrayCompany}
                  />
                )}
            </div>
          </div>

          <div className=" hidden   flex-1 md:flex flex-col">
            <div className="mb-4">
              <h3 className="m-0 text-2xl md:text-2xl lg:text-2xl">
                Your deliveries
              </h3>
              <small>Keep your items onder control</small>
            </div>
            <div className="bg-gray-200 h-[auto] rounded-md flex-1"></div>
          </div>
        </section>
        <DisplayMapSection
          selectedCompany={selectedCompany}
          erroData={errorData}
        />
      </div>
    </>
  );
}

export default DashBoard;

const ArrayComapyLoadingIndicator = () => {
  return (
    <>
      <div className=" bg-gray-300 h-8 mt-2 w-2/3 rounded-md"></div>
      <div className=" bg-gray-300 h-10 rounded-md"></div>
      <div className=" bg-gray-300 h-6 w-1/3 rounded-md"></div>
    </>
  );
};

const ArrayCompanyEmptyState = () => {
  return (
    <>
      <div>
        <p className="text-center lg:text-left">
          Looks like there is no companies added yet
        </p>
        <small>
          It is time to take create a new company and lead your team to success
        </small>
      </div>
      <NavLink
        to={`/workspace/company/new`}
        className="btn sm:self-auto  md:self-baseline lg:self-baseline"
      >
        Add new company
      </NavLink>
    </>
  );
};

const ArrayCompanyErrorState = () => {
  return (
    <>
      <p className=" text-center m-0">There was an error getting your data</p>
      <small className=" font-light">
        remeber to double check your conection and ig there error persist try
        again later
      </small>
      <button
        className="btn btn--danger"
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload page
      </button>
    </>
  );
};

const ArrayCompanyDisplayList = ({
  selectedCompany,
  setSelectedCompany,
  arrayCompany,
}) => {
  const handleChange = (ev) => {
    setSelectedCompany(arrayCompany[ev.target.value]);
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        <form
          className=" flex flex-col gap-x-4 gap-y-2"
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
        >
          <label
            htmlFor="company-selected"
            className=" text-base flex items-center text-black"
          >
            Select your target company
          </label>
          <select
            onChange={handleChange}
            id="company-selected"
            className="bg-sky-500 border cursor-pointer text-sm  font-medium rounded-lg p-2.5  flex-1 placeholder-gray-400 text-sky-950  focus:ring-sky-500  focus:border-blue-500"
          >
            {arrayCompany.map((element, index) => (
              <option key={element._id} value={index}>
                {element.name}
              </option>
            ))}
          </select>
        </form>
        <section className="border-dashed border-2 border-gray-500 rounded-md p-2 flex flex-col gap-4">
          <div className="flex gap-3">
            <FontAwesomeIcon
              icon={faBuilding}
              className=" self-center"
              style={{ color: "#4b5563" }}
            />
            <p className="m-0">{selectedCompany.name}</p>
          </div>
          <div className="flex gap-3">
            <FontAwesomeIcon
              icon={faMapPin}
              className=""
              style={{ color: "#4b5563" }}
            />
            <p className="m-0">{selectedCompany.address}</p>
          </div>
        </section>
        <div className="flex lg:justify-end">
          <NavLink
            role="button"
            className="btn  flex-1 lg:flex-none"
            to={`/workspace/company?company=${selectedCompany._id}`}
          >
            <FontAwesomeIcon
              icon={faFileEdit}
              className=" mx-2"
              style={{ color: "#082f49" }}
            />
            Edit company
          </NavLink>
        </div>
      </div>
    </>
  );
};

const DisplayMapSection = ({ selectedCompany, erroData }) => {
  const [companyPoint, setCompanyPoint] = useState({});
  useEffect(() => {
    if (selectedCompany != null && Object.keys(selectedCompany).length != 0) {
      setCompanyPoint({
        lat: Number(selectedCompany.location.latitude),
        lng: Number(selectedCompany.location.longitude),
      });
    }
  }, [selectedCompany, erroData]);

  return (
    <section className=" lg:w-2/3  flex  flex-col h-[70vh] lg:h-[auto]">
      <div className=" mb-4">
        <h3 className="m-0 text-3xl md:text-3xl lg:text-3xl">Your map view</h3>
        <small>Find your active deliveries list</small>
      </div>

      <div className="bg-gray-200 h-[40vh] rounded-md flex justify-center items-center flex-col flex-1 overflow-hidden z-[0] p-2">
        {!selectedCompany && !erroData && (
          <div role="status" className=" flex flex-col gap-2">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-400 animate-spin  fill-sky-600 self-center"
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
            <small className="">Loading...</small>
          </div>
        )}
        {!selectedCompany && erroData && (
          <div role="status">
            <p>There was an error</p>
          </div>
        )}
        {selectedCompany &&
          Object.keys(selectedCompany).length == 0 &&
          !erroData && (
            <div className="flex flex-col gap-5">
              <FontAwesomeIcon
                icon={faFolderOpen}
                className=" self-center"
                style={{ color: "#000", fontSize: "30px" }}
              />
              <p>getting started with a new company is easier than you think</p>
            </div>
          )}
        {selectedCompany != null &&
          Object.keys(selectedCompany).length != 0 &&
          !erroData && <MapComponent mainCompanyPoint={companyPoint} />}
      </div>
    </section>
  );
};

ArrayCompanyDisplayList.propTypes = {
  selectedCompany: PropTypes.object,
  setSelectedCompany: PropTypes.func,
  arrayCompany: PropTypes.array,
};

DisplayMapSection.propTypes = {
  selectedCompany: PropTypes.object,
  erroData: PropTypes.string,
};
