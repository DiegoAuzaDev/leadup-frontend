/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { NavLink, useOutletContext, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import deleteCompany from "../../../utils/company/deleteCompany";
import { useToken } from "../../../context/tokenContext";
import EditCompany from "./EditCompany/EditCompany";
import ShowGridCompany from "./ShowGridCompany/ShowGridCompany";
import LoadingIndicator from "../LoadingIndicator/LodingIndicator";
function Company() {
  const [token, setToken] = useToken();
  const [searchParams, setSearchParamas] = useSearchParams();
  const [{ companyData, setCompanyData }] = useOutletContext();
  const [displayComponent, setDisplayComponent] = useState(
    <LoadingIndicator />
  );

  const companyId = searchParams.get("company");
  useEffect(() => {

    if (companyId && companyData) {
      setDisplayComponent(
        <EditCompany
          selectedCompanyId={companyId}
          setCompanyData={setCompanyData}
          companyCollection={companyData}
        />
      );
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

  return (
    <div
      className={`${
        !companyId && !companyData ?  "w-[70vh] flex justify-center" : ""
      }`}
    >
      {displayComponent}
    </div>
  );
}


function EmptyList() {
  return (
    <>
      <h2 className="m-0 text-3xl md:text-3xl lg:text-3xl">
        Your list is currently empty
      </h2>
      <p>Lead up your team starting by creagting a new company</p>
      <NavLink className="btn" to={`/workspace/company/new`}>
        Add new company
      </NavLink>
    </>
  );
}




export default Company;
