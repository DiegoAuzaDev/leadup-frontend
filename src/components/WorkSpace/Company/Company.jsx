/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { NavLink, useOutletContext, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faFlag,
  faLocationDot,
  faPenToSquare,
  faPhone,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import deleteCompany from "../../../utils/company/deleteCompany";
import { useToken } from "../../../context/tokenContext";
function Company() {
  const [token, setToken] = useToken();
  const [searchParams, setSearchParamas] = useSearchParams();
  const [{ companyData, setCompanyData }] = useOutletContext();
  const [displayComponent, setDisplayComponent] = useState(
    <LoadingIndicator />
  );
  useEffect(() => {
    const companyId = searchParams.get("company");
    if (companyId) {
      setDisplayComponent(<EditCompany />);
    } else if (companyData && companyData.length == 0) {
      setDisplayComponent(<EmptyList />);
    } else if (companyData && companyData.length > 0) {
      setDisplayComponent(<ShowGridCompany companyDataList={companyData} token={token}/>);
    }
  }, [companyData, searchParams]);

  return <section>{displayComponent}</section>;
}

function ShowGridCompany({ companyDataList, token }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const currentDate = new Date();
  return (
    <>
      {isActive && (
        <DeletePopUp
          setIsActive={setIsActive}
          companyToDelete={selectedCompany}
          token={token}
        />
      )}
      <div className="flex flex-col  mb-4 gap-4">
        <h2 className="m-0 text-3xl md:text-3xl lg:text-3xl">
          Keep your team in sync with your goals
        </h2>
        <p>{`Create and update based on your team's goals. With Lead Up, managing your data has never been easier.`}</p>
      </div>
      <section>
        <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-4">
          {companyDataList.map((element) => (
            <li
              key={element._id}
              className=" bg-gray-200 rounded-md py-4 flex flex-col gap-4"
            >
              <div className="border-2 border-b-white mx-4 flex justify-between items-center">
                <h3 className="text-xl m-0 max-w-[320px] line-clamp-1 overflow-clip  hover:line-clamp-2">
                  {element.name}
                </h3>
                <small className=" text-gray-600">
                  {getDateFromCreation(element.createdAt, currentDate)}
                </small>
              </div>
              <div className="px-4 grid grid-flow-col auto-cols-max gap-4">
                <div className=" flex gap-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className=" self-center"
                    style={{ color: "#4b5563" }}
                  />
                  <p className="m-0 font-medium">Address</p>
                </div>
                <p className="m-0 text-gray-700">
                  {formatAddress(element.address)}
                </p>
              </div>
              <div className="px-4 grid grid-flow-col auto-cols-max gap-4">
                <div className=" flex gap-2">
                  <FontAwesomeIcon
                    icon={faFlag}
                    className=" self-center"
                    style={{ color: "#4b5563" }}
                  />
                  <p className="m-0 font-medium">Country</p>
                </div>
                <p className="m-0 text-gray-700">{element.country}</p>
              </div>
              <div className="pl-4 mr-4 grid grid-flow-col auto-cols-max gap-4">
                <div className=" flex gap-2 items-baseline">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className=" self-baseline"
                    style={{ color: "#4b5563" }}
                  />
                  <p className="m-0 font-medium">Phone numbers</p>
                </div>
                <div className=" flex flex-col gap-2">
                  {element.phoneNumber.map((phoneNumbers, index) => (
                    <p key={index} className="m-0">
                      {phoneNumbers}
                    </p>
                  ))}
                </div>
              </div>
              <div className="px-4 grid grid-flow-col auto-cols-max gap-4">
                <div className=" flex gap-2">
                  <FontAwesomeIcon
                    icon={faBook}
                    className=" self-center"
                    style={{ color: "#4b5563" }}
                  />
                  <p className="m-0 font-medium">Last updpate</p>
                </div>
                <p className="m-0 text-gray-700">
                  {formatDate(element.updatedAt)}
                </p>
              </div>
              <div className="px-4 flex justify-end gap-2 mt-[auto]">
                <NavLink
                  to={`/workspace/company?company=${element._id}`}
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className=" self-center"
                    style={{ color: "#4b5563" }}
                  />
                </NavLink>
                <button
                  className="btn btn--danger"
                  onClick={ async() => {
                    setIsActive(true);
                    setSelectedCompany(element);
                  //  let deleteResponse = await deleteCompany(element._id, token);
                  //  console.log( await deleteResponse);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" self-center"
                    style={{ color: "#4b5563" }}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function EmptyList() {
  return (
    <>
      <h2 className="m-0 text-3xl md:text-3xl lg:text-3xl">
        Your list is currently empty
      </h2>
      <p>Lead up your team starting by creagting a new company</p>
    </>
  );
}

function LoadingIndicator() {
  return (
    <>
      <p>Loading Data...</p>
    </>
  );
}
function EditCompany() {
  return (
    <>
      <p className="m-0 text-3xl md:text-3xl lg:text-3xl">Edti data here</p>
    </>
  );
}

function DeletePopUp({ companyToDelete, setIsActive, token }) {
  return (
    <>
      <div
        className=" fixed bg-[#00000082] top-0 h-[100vh] left-0 w-[100vw] flex"
        onClick={() => {
          setIsActive(false);
        }}
      >
        <div className=" bg-gray-200 max-w-fit m-auto rounded-md">
          <div className="p-4">
            <p className="">Are you sure you want to delete</p>
            <p>{companyToDelete.name + " from your company list"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function formatAddress(originalAddress) {
  // Split the original address based on ","
  const addressParts = originalAddress.split(",");

  // Take the first half of the address
  const formattedAddress = addressParts[0].trim();

  // Return the formatted address
  return formattedAddress;
}

function getDateFromCreation(dataCreated, currentData) {
  // Parse the date strings into Date objects
  const createdDate = new Date(dataCreated);
  const currentDate = new Date(currentData);

  // Calculate the difference in milliseconds
  const differenceMs = currentDate - createdDate;

  // Convert milliseconds to days
  const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

  // If the difference is less than one day, return difference in hours
  if (differenceDays === 0) {
    const differenceHours = Math.floor(differenceMs / (1000 * 60 * 60));
    return `Created ${differenceHours} hours ago`;
  }

  // Return the result in days
  return `Created ${differenceDays} days ago`;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based, so add 1
  const year = date.getFullYear();

  // Format the date
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

ShowGridCompany.propTypes = {
  companyDataList: PropTypes.array,
  token: PropTypes.string,
};
DeletePopUp.propTypes = {
  companyToDelete: PropTypes.object,
  setIsActive: PropTypes.func,
  token: PropTypes.string,
};

export default Company;
