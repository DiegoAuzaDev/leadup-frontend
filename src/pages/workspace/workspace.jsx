/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useToken } from "../../context/tokenContext";
import HeaderWorkSpace from "../../components/workspace/header";

function Workspace() {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-x-3 gap-y-5 h-[100vh] w-[100vw]">
      <HeaderWorkSpace />
    </div>
  );
}

export default Workspace;
