/* eslint-disable no-unused-vars */
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/keys";
//

//
import { useToken } from "../../context/tokenContext";
import { useEffect, useState } from "react";
//
import "./workSpace.css";
import "../../button.css";
import HeaderWorkSpace from "./HeaderWorkSpace/HeaderWorkSpace";

const getData = ({ apiKey, setUserData, setCompanyData, setError }) => {
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "application-type": "application/json",
  };
  fetch(API_URL, {
    method: "GET",
    mode: "cors",
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data) => {
      if (data.user.local || data.user.google) {
        const userData = {
          email: data.user.local
            ? data.user.local.email
            : data.user.google.email,
          photo: data.user.local
            ? data.user.local.photo
            : data.user.google.photo,
          name: data.user.local ? data.user.local.name : data.user.google.name,
        };

        setUserData(userData);
      }

      setCompanyData(data.company);
    })
    .catch((err) => {
      setError(err.message);
    });
};
function WorkSpace() {
  const navigate = useNavigate();
  const [token, setToken] = useToken();
  const [searchParams, setSearchParamas] = useSearchParams();
  const [userData, setUserData] = useState(null);

  const [companyData, setCompanyData] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    const urlToken = searchParams.get("token");
    if (urlToken) {
      setToken(urlToken);
      getData({
        apiKey: urlToken,
        setCompanyData: setCompanyData,
        setError: setError,
        setUserData: setUserData,
      });
      return;
    }
    if (token) {
      getData({
        apiKey: token,
        setCompanyData: setCompanyData,
        setError: setError,
        setUserData: setUserData,
      });
    }
    if (!token) {
      navigate("/signup");
    }
  }, [token]);

  const doLogout = async () => {
    const logouturl = `http://localhost:3004/auth/logout`;
      const logoutResponse = await fetch(logouturl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(logoutResponse)
    setToken(null);

    navigate("/");
  };

  return (
    <div className=" md:flex flex-row">
      <HeaderWorkSpace doLogout={doLogout} userData={userData} error={error} />
      <main className=" md:ml-0 pb-8 md:pb-0 md:my-6 md:max-h-[95vh] overflow-scroll container-main md:flex lg:w-[100em]">
        <Outlet context={[{ userData, companyData, setCompanyData, error }]} />
      </main>
    </div>
  );
}

export default WorkSpace;
