import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TokenProvider } from "./context/tokenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TokenProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TokenProvider>
);
