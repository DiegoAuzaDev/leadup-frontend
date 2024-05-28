import { Routes, Route } from "react-router-dom";
import LandPage from "./pages/landPage/landPage";
import Auth from "./pages/authenticationPage/auth";
import Workspace from "./pages/workspace/workspace";
import ErrorPage from "./pages/erro/error";
import Dashboard from "./components/workspace/dashboard"
import Calendar from "./components/workspace/calendar"
import Team from "./components/workspace/Team";
import Vehicles from "./components/workspace/Vehicles";
import Support from "./components/workspace/support";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/auth/signIn" element={<Auth />} />
      <Route path="/auth/signUp" element={<Auth />} />
      <Route path="/leadUp/workspace/" element={<Workspace />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="team" element={<Team />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="support" element={<Support />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
