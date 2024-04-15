import { Routes, Route } from "react-router-dom";
import LandPage from "./pages/landPage/landPage";
import Auth from "./pages/authenticationPage/auth";
import ErrorPage from "./pages/erro/error";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/auth/signIn" element={<Auth />} />
      <Route path="/auth/signUp" element={<Auth />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
