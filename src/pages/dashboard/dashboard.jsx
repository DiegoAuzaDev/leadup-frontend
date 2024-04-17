/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useToken } from "../../context/tokenContext";

function DashBoard() {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [token, setToken] = useToken();
  const navigate = useNavigate();
  const urlToken = searchParams.get("token");
  
  useEffect(() => {
    document.body.classList.remove("bg-primary");
    document.body.classList.add("bg-white");
  }, []);

  useEffect(() => {
    if (urlToken) {
      setToken(urlToken);
    }
    if (!token && !urlToken) {
      navigate("/");
    }
  }, [navigate, setToken, token, urlToken]);

  return <h1>This is dasborad</h1>;
}

export default DashBoard;