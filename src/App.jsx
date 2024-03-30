import Welcome from "./components/Welcome/Welcome";
import SignUp from "./components/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import DashBoard from "./components/WorkSpace/DashBoard/DashBoard";
import Settings from "./components/WorkSpace/Setting/Settings";
import Employee from "./components/WorkSpace/Employee/Employee";
import Company from "./components/WorkSpace/Company/Company";
import NewCompany from "./components/WorkSpace/Company/NewCompany/NewCompany";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/workspace" element={<WorkSpace />}>
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="employee" element={<Employee />} />
        <Route path="company" element={<Company />} />
        <Route path="company/new" element={<NewCompany />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
