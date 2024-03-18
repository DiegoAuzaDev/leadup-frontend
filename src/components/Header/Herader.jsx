import { NavLink } from "react-router-dom";
import LogoBlack from "../../assets/LeadUpBlack.png";
import Bars from "../../assets/bars-solid.svg";
import Close from "../../assets/xmark-solid.svg";
import "../../button.css";
import "./header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="py-7 shadow-md fixed w-full z-[1000000] bg-[#F8F9FA]">
      <div className="container-main">
        <nav className=" flex justify-between md:gap-2">
          <NavLink>
            <img
              src={LogoBlack}
              alt="Leaderup logo"
              className="h-12 object-fill"
            />
          </NavLink>
          <ul
            role="list"
            className={`justify-between m-0 hidden md:flex flex-row flex-1 `}
          >
            <div className=" flex flex-row divide-x-2 ">
              <li className="flex">
                <NavLink className=" hover:bg-gray-200 focus:bg-gray-200 font-medium py-3 px-1 transition-all ease-in-out duration-300 ">
                  Services
                </NavLink>
              </li>
              <li className="flex">
                <NavLink className=" hover:bg-gray-200 focus:bg-gray-200 font-medium p-3 transition-all ease-in-out duration-300 ">
                  About us
                </NavLink>
              </li>
              <li className="flex">
                <NavLink className=" hover:bg-gray-200 focus:bg-gray-200 font-medium p-3 transition-all ease-in-out duration-300 ">
                  Contact
                </NavLink>
              </li>
            </div>
            <div className="flex gap-2">
              <NavLink className="btn block" to="/signup">
                Sign up
              </NavLink>
              <NavLink className=" btn--outline block">Log in</NavLink>
            </div>
          </ul>
          <button
            className=" md:hidden "
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <img src={`${!isActive ? Bars : Close}`} alt="" className=" h-6" />
          </button>
          <ul
            role="list"
            className={`bg-[#F8F9FA] fixed w-full top-[104px] bottom-0 flex flex-col justify-between m-0 pb-14 pt-6 ul-cointainer ${
              !isActive ? "" : "active"
            }  md:hidden`}
          >
            <div className=" flex flex-col divide-y-2">
              <li className=" flex">
                <NavLink className="container-main py-4 flex justify-between hover:bg-gray-200 focus:bg-gray-200 font-medium">
                  Services
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className=" self-center"
                    style={{ color: "#000" }}
                  />
                </NavLink>
              </li>
              <li className=" flex">
                <NavLink className="container-main py-4 flex justify-between hover:bg-gray-200 focus:bg-gray-200 font-medium">
                  About us
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className=" self-center"
                    style={{ color: "#000" }}
                  />
                </NavLink>
              </li>
              <li className=" flex">
                <NavLink className="container-main py-4 flex justify-between hover:bg-gray-200 focus:bg-gray-200 font-medium">
                  Contact
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className=" self-center"
                    style={{ color: "#000" }}
                  />
                </NavLink>
              </li>
            </div>
            <div className="container-main">
              <NavLink className=" btn block my-4">Log in</NavLink>
              <NavLink className=" btn--outline block">Sign up</NavLink>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
