import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "../../../assets/LeadUp.svg";
import Bars from "../../../assets/bars-solid.svg";
import Close from "../../../assets/bars-solid.svg";
import LargeNavigator from "../LargeNavigator/LargeNavigator";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function HeaderWorkSpace({ doLogout, userData, error }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className=" md:bg-white md:shadow-md">
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
            className={` z-[1] bg-[#00000048] h-[100vh] fixed w-[100vw] left-[800px] top-0 mobile-nav-workspace-bg-color ${
              isActive ? "active" : ""
            } md:hidden`}
          ></div>
          <ul
            role="list"
            className={` z-20 bg-[#F8F9FA]  w-[66%] fixed bottom-0 top-0 left-[800px] h-[100vh] flex flex-col m-0 pb-14 pt-6 justify-between mobile-nav-workspace ${
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
  );
}

HeaderWorkSpace.propTypes = {
  doLogout: PropTypes.func,
  userData: PropTypes.objectOf(PropTypes.string),
  error: PropTypes.string
};

export default HeaderWorkSpace;
