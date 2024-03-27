import { useEffect } from "react";
import { NavLink, useOutletContext, useSearchParams } from "react-router-dom";

function Company() {
  const [searchParams, setSearchParamas] = useSearchParams();
    const [userData, companyData, error] = useOutletContext();
    console.log(companyData)
  useEffect(() => {
    const companyId = searchParams.get("company");
    if (companyId) {
      console.log(companyId);
    } else {
      console.log("No company Id passed");
    }
  });
  return (
    <>
      <h1>company route</h1>
    </>
  );
}

export default Company;
