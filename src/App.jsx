import { Routes, Route } from "react-router-dom";
import LandPage from "./pages/landPage/landPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
    </Routes>
  );
}

export default App;
