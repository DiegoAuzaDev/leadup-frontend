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
import { useState } from "react";

import { NavLink } from "react-router-dom";
import getDateFromCreation from "../../../../utils/company/getDateFromCreation";
import DeletePopUp from "../DeleteCompanyPopUp/DeleteCompanyPopUp";


function ShowGridCompany({ companyDataList, token, setCompanyData }) {
  const [isActive, setIsActive] = useState(false);

  const [selectedCompany, setSelectedCompany] = useState(null);
  const currentDate = new Date();
  return (
    <>
      {isActive && (
        <DeletePopUp
          companyList={companyDataList}
          setCompanyData={setCompanyData}
          setIsActive={setIsActive}
          companyToDelete={selectedCompany._id}
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
                  <p className="m-0 font-medium ">Phone numbers</p>
                </div>
                <div className=" flex flex-col gap-2">
                  {element.phoneNumber.map((phoneNumbers, index) => (
                    <p key={index} className="m-0 text-gray-700">
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
                  onClick={async () => {
                    setIsActive(true);
                    setSelectedCompany(element);
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
        <div>
          <NavLink to={`/workspace/company/new`} className="btn">
            Create new company
          </NavLink>
        </div>
      </section>
    </>
  );
}

ShowGridCompany.propTypes = {
  companyDataList: PropTypes.array,
  token: PropTypes.string,
  setCompanyData: PropTypes.func,
};


export default ShowGridCompany;


function formatAddress(originalAddress) {
  // Split the original address based on ","
  const addressParts = originalAddress.split(",");

  // Take the first half of the address
  const formattedAddress = addressParts[0].trim();

  // Return the formatted address
  return formattedAddress;
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