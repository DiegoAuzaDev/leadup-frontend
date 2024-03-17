import Welcome from "./components/Welcome/Welcome"
import SignUp from "./components/SignUp/SignUp"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/singup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
