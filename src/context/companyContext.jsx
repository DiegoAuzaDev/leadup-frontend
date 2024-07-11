import { createContext, useContext, useState } from "react";

const CompanyContext = createContext();

function CompanyContextProvider(props){
    const [company, setCompany] = useState([])
    return <CompanyContext.Provider value={[company, setCompany]} {...props}/>;
}
function useCompanyContext(){
    const context = useContext(CompanyContext);
    if(!context) throw new Error("No Company Context")
    return context;
}

export { CompanyContextProvider, useCompanyContext};