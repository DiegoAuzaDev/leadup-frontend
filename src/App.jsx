import Welcome from "./components/Welcome/Welcome"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Welcome/>}/> 
      </Routes>
  );
}

export default App;
