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
      setDisplayComponent(
        <ShowGridCompany
          companyDataList={companyData}
          token={token}
          setCompanyData={setCompanyData}
        />
      );
    }
  }, [companyData, searchParams]);

  return <section>{displayComponent}</section>;
}

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

function LoadingIndicator({loadingText}) {
  return (
    <>
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
      <p className="m-0">{loadingText ? loadingText : "Loading Data..."}</p>
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

function DeletePopUp({ companyToDelete, setIsActive, token, companyList, setCompanyData }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    setIsLoading(true)
    const result = await deleteCompany(companyToDelete, token);
    console.log(companyToDelete)
    if(typeof result == "object") {
      const newCompanyData = companyList.filter(item => item._id !== companyToDelete);
      setIsLoading(false)
      setCompanyData(newCompanyData);
    }
     setIsActive(false)
  }
  ;

  return (
    <>
      <div className="fixed bg-[#00000082] top-0 h-[100vh] left-0 w-[100vw] flex">
        <div className="bg-gray-200 max-w-fit m-auto rounded-md overflow-hidden">
          <div className=" w-[400px] min-h-[200px] flex">
            {isLoading && (
              <div className="flex justify-center m-auto flex-col gap-3">
                <LoadingIndicator loadingText={"Deleting data..."} />
              </div>
            )}
            {!isLoading && (
              <div>
                <p className="border-2 border-b-white py-4 px-4">
                  Are you sure you want to delete
                </p>
                <p className="px-4">
                  This action will delete all data related to the selected
                  company, such as deliveries and employees.
                </p>
                <div className="p-4 flex flex-row gap-4">
                  <button
                    className="btn--outline"
                    onClick={() => {
                      setIsActive(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn--danger"
                    onClick={() => {
                      handleDelete();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
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
  setCompanyData : PropTypes.func
};
LoadingIndicator.propTypes = {
  loadingText : PropTypes.string
};
DeletePopUp.propTypes = {
  companyToDelete: PropTypes.string,
  setCompanyData : PropTypes.func,
  setIsActive: PropTypes.func,
  token: PropTypes.string,
  companyList : PropTypes.array
};

export default Company;
