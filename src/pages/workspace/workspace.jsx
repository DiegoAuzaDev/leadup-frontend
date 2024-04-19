/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToken } from "../../context/tokenContext";
import HeaderWorkSpace from "../../components/workspace/header";
import { requestuserData } from "../../utils/workspace/user";
import ErrorWorkspace from "../../components/workspace/error";

function Workspace() {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [token, setToken] = useToken();
  const navigate = useNavigate();
  const urlToken = searchParams.get("token");

  // user data
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.body.classList.remove("bg-primary");
    document.body.classList.add("bg-white");
  }, []);

  useEffect(() => {
    if (urlToken) {
      setToken(urlToken);
      getUserData(urlToken);
      return;
    }
    if (token) {
      getUserData(token);
      return;
    }
    if (!token && !urlToken) {
      navigate("/");
    }
  }, [token]);

  const getUserData = async () => {
    setError(null);
    setErrorMessage("");
    try {
      const response = await requestuserData(token);
      if (response.ok && response.status == 200) {
        setIsLoading(false);
        console.log(response);
        const body = await response.json();
        console.log(body);
      }
      if (!response.ok && response.status == 401) {
        throw new Error("Unauthorized, Error status : 401");
      }
      if (!response.ok) {
        throw new Error("Server Error, Error status : 500");
      }
    } catch (err) {
      // setIsLoading(false);
      // setError(true);
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="grid grid-cols-12  px-3 py-5 md:px-0 md:py-0 grid-rows-1 gap-0 md:grid-cols-12 md:grid-rows-2 md:gap-x-3 md:gap-y-5 h-[100vh] w-[100vw]">
      <HeaderWorkSpace />
      {isLoading && (
        <>
          <h1>Is Loading</h1>
        </>
      )}
      {error && <ErrorWorkspace message={errorMessage} />}
    </div>
  );
}

export default Workspace;
