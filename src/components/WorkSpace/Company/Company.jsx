/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { NavLink, useOutletContext, useSearchParams } from "react-router-dom";
import { geocodeToAddressKey } from "../../../utils/keys";

function Company() {
  const [searchParams, setSearchParamas] = useSearchParams();
  const [{companyData}] = useOutletContext();
  

  // console.log(companyData);

  useEffect(() => {
    const companyId = searchParams.get("company");
    if(companyId){
      console.log("edit company")
    } 
    // console.log(geocodeToAddressKey())
  });

  return (
    <>
      <h1>Loading Indicator</h1>
      <button onClick={()=>{
        console.log("clicked")
      }}> reload page</button>
    </>
  );
}

export default Company;
