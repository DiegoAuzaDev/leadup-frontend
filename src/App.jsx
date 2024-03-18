import Welcome from "./components/Welcome/Welcome"
import SignUp from "./components/SignUp/SignUp"
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
  );
}

export default App;
