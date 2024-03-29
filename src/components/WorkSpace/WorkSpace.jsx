/* eslint-disable no-unused-vars */
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
//

//
import { useToken } from "../../context/tokenContext";
import { useEffect, useState } from "react";
//
import "./workSpace.css";
import "../../button.css";
import HeaderWorkSpace from "./HeaderWorkSpace/HeaderWorkSpace";

function WorkSpace() {
  const navigate = useNavigate();
  const [token, setToken] = useToken();
  const [searchParams, setSearchParamas] = useSearchParams();
  // todo
  const [userData, setUserData] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [error, setError] = useState(null);
  // const API_URL = `https://leadup-backend.onrender.com/api`;
  const API_URL = `http://localhost:3004/api`;

  // get user token if there is no token on the url or session storage it will navigate back to log in
  useEffect(() => {
    const urlToken = searchParams.get("token");
    if (urlToken) {
      setToken(urlToken);
      const API_TOKEN = urlToken;
      let headers = {
        Authorization: `Bearer ${API_TOKEN}`,
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
          setUserData({
            email: data.user.email,
            photo: data.user.photo,
            name: data.user.name,
            createdAt: data.user.createdAt,
          });
          setCompanyData(data.company);
        })
        .catch((err) => {
          setError(err.message)
        });
      return;
    }
    if (!token) {
      navigate("/signup");
    }
  }, [token]);

  const doLogout = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <div className=" md:flex flex-row">
      <HeaderWorkSpace doLogout={doLogout} userData={userData} error={error} />
      <main className=" md:ml-0 pb-8 md:pb-0 md:my-6 container-main md:flex lg:w-[100em]">
        <Outlet context={[userData, companyData, error]} />
      </main>
    </div>
  );
}
export default WorkSpace;
