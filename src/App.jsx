import { Routes, Route } from "react-router-dom";
import LandPage from "./components/landPage/landPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
    </Routes>
  );
}

export default App;
