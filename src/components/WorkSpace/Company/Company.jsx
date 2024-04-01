/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { NavLink, useOutletContext, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
function Company() {

  const [searchParams, setSearchParamas] = useSearchParams();
  const [{ companyData }] = useOutletContext();
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
      setDisplayComponent(<ShowGridCompany companyDataList={companyData} />);
    }
  }, [companyData, searchParams]);

  return <section>{displayComponent}</section>;
}

function ShowGridCompany({ companyDataList }) {
    const currentDate = new Date();
  return (
    <>
      <div className="flex flex-col  mb-8 gap-4">
        <h2 className="m-0 text-3xl md:text-3xl lg:text-3xl">
          Keep your team in sync with your goals
        </h2>
        <p>{`Create and update based on your team's goals`}</p>
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
                
                <p className="m-0 text-gray-700">{element.address}</p>
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


ShowGridCompany.propTypes = {
  companyDataList: PropTypes.array,
};

export default Company;
