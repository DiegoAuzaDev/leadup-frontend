/* eslint-disable no-unused-vars */
import {
  Outlet,
  NavLink,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
//
import Logo from "../../assets/LeadUp.svg";
import Bars from "../../assets/bars-solid.svg";
import Close from "../../assets/xmark-solid.svg";
import LargeNavigator from "./LargeNavigator/LargeNavigator";

//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faL } from "@fortawesome/free-solid-svg-icons";
import { useToken } from "../../context/tokenContext";
import { useEffect, useState } from "react";
//
import "./workSpace.css";
import "../../button.css";

function WorkSpace() {
  const navigate = useNavigate();
  const [token, setToken] = useToken();
  const [searchParams, setSearchParamas] = useSearchParams();
  const [error, setError] = useState(null);
  // todo
  const [userData, setuserData] = useState();
  const [companyData, setCompanyData] = useState();
  const API_URL = `http://localhost:3004/api`;

  // get user token if there is no token on the url or session storage it will navigate back to log in
  useEffect(() => {
    console.log("hello");
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
          console.log(data.user);
          setuserData(data.user);
          setCompanyData(data.company);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setCompanyData(null)
          setuserData(null)
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

  const [isActive, setIsActive] = useState(false);
  return (
    <div className=" md:flex flex-row">
      <header>
        <section className=" md:flex">
          <nav className="flex justify-between md:hidden bg-white py-4 mb-4 shadow-md">
            <div className=" container-main flex justify-between">
              <NavLink to="/workspace/dashboard">
                <img src={Logo} alt="Leadup logo" className=" h-8" />
              </NavLink>
              <button
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                <img
                  src={`${!isActive ? Bars : Close}`}
                  alt=""
                  className=" h-6"
                />
              </button>
            </div>

            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={`bg-[#00000048] h-[100vh] fixed w-[100vw] left-[800px] top-0 mobile-nav-workspace-bg-color ${
                isActive ? "active" : ""
              } md:hidden`}
            ></div>
            <ul
              role="list"
              className={`bg-[#F8F9FA]  w-[66%] fixed bottom-0 top-0 left-[800px] h-[100vh] flex flex-col m-0 pb-14 pt-6 justify-between mobile-nav-workspace ${
                isActive ? "active" : ""
              } md:hidden `}
            >
              <div className="divide-y-2 gap-1">
                <li className="flex flex-col">
                  <NavLink
                    to="/workspace/dashboard"
                    className=" container-main py-4 flex justify-between hover:bg-gray-200"
                  >
                    DashBoard
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className=" self-center"
                      style={{ color: "#000" }}
                    />
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to="/workspace/employee"
                    className=" container-main py-4 flex justify-between hover:bg-gray-200"
                  >
                    Employee
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ color: "#000" }}
                    />
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to="/workspace/settings"
                    className=" container-main py-4 flex justify-between hover:bg-gray-200"
                  >
                    Settings
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className=" self-center"
                      style={{ color: "#000" }}
                    />
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to="/workspace/company"
                    className=" container-main py-4 flex justify-between hover:bg-gray-200"
                  >
                    Company
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className=" self-center"
                      style={{ color: "#000" }}
                    />
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to="/workspace/delivery"
                    className=" container-main py-4 flex justify-between hover:bg-gray-200"
                  >
                    Delivery
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className=" self-center"
                      style={{ color: "#000" }}
                    />
                  </NavLink>
                </li>
              </div>
              <div className="container-main flex">
                <button
                  className=" btn btn--danger block flex-1"
                  onClick={() => {
                    doLogout();
                  }}
                >
                  logout
                </button>
              </div>
            </ul>
          </nav>
          <LargeNavigator user={userData} logout={doLogout} error={error} />
        </section>
      </header>
      <main className=" md:ml-0 md:my-6 container-main">
        <Outlet context={[userData, companyData]} />
      </main>
    </div>
  );
}
export default WorkSpace;
