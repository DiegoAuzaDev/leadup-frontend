import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TokenProvider } from "./context/tokenContext.jsx";
import { UserContextProvider } from "./context/userContext.jsx";
import { APIProvider } from "@vis.gl/react-google-maps";
import { EmployeesContextProvider } from "./context/employeesContext.jsx";
import { CompanyContextProvider } from "./context/companyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <TokenProvider>
      <UserContextProvider>
        <BrowserRouter>
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API}>
            <EmployeesContextProvider>
              <CompanyContextProvider >
              <App />
              </CompanyContextProvider>
            </EmployeesContextProvider>
          </APIProvider>
        </BrowserRouter>
      </UserContextProvider>
    </TokenProvider>
  </>
);
