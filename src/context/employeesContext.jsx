import { createContext, useContext, useState } from "react";

const EmployeesContext = createContext();

function EmployeesContextProvider(props) {
  const [employees, setEmployees] = useState([]);
  return <EmployeesContext.Provider value={[employees, setEmployees]} {...props} />;

}

function useEmployeesContext() {
  const context = useContext(EmployeesContext);
  if (!context) throw new Error("No employees Context");
  return context;
}

export { EmployeesContextProvider, useEmployeesContext};
