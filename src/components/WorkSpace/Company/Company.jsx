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
  console.log(companyDataList);
  return (
    <>
      <div>
        <h2>Keep your team in sync with your goals</h2>
        <p>{`Create and update based on your team's goals`}</p>
      </div>
      <div>
        <ul></ul>
      </div>
    </>
  );
}

function EmptyList() {
  return (
    <>
      <h2>Your list is currently empty</h2>
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
      <p>Edti data here</p>
    </>
  );
}
ShowGridCompany.propTypes = {
  companyDataList: PropTypes.array,
};

export default Company;
