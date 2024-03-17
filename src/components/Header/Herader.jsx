import { NavLink } from "react-router-dom";
import LogoBlack from "../../assets/LeadUpBlack.png";
import Bars from "../../assets/bars-solid.svg";
import Close from "../../assets/xmark-solid.svg";
import "../../button.css";
import "./header.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isActive, setIsActive] = useState(false);


  return (
    <>
      <header>
        <section className=" fixed w-full py-4 shadow-lg bg-white">
          <div className="container-main">
            <div className="flex flex-row justify-between md:gap-6">
              <NavLink className="" to="/">
                <img
                  src={LogoBlack}
                  className="  object-cover h-12"
                  alt="Leadup Logo"
                />
              </NavLink>
              <button
                className=" md:hidden"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                <img
                  className=" h-6 px-3"
                  src={!isActive ? Bars : Close}
                  alt="Hamburguer menu icon"
                />
              </button>
              <section className=" hidden md:flex  m-0   flex-row justify-between flex-1">
                <nav className=" flex-1 flex">
                  <ul role="list" className="m-0 flex flex-row gap-3">
                    <li className="self-center">
                      <NavLink
                        to="/"
                        className=" font-medium self-center p-3 hover:bg-sky-300"
                      >
                        Product
                      </NavLink>
                    </li>
                    <li className="self-center">
                      <NavLink
                        to="/"
                        className=" font-medium self-center p-3 hover:bg-sky-300"
                      >
                        Learn
                      </NavLink>
                    </li>
                    <li className="self-center">
                      <NavLink
                        to="/"
                        className=" font-medium self-center p-3 hover:bg-sky-300"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </nav>

                <div>
                  <button className="btn">Sign in</button>
                </div>
              </section>
            </div>
          </div>
        </section>
        <div
          className={` pt-2 pb-8 w-full mobile-menu ${
            !isActive ? "" : "active"
          } md:hidden`}
          id="mobile-menu"
        >
          <nav>
            <ul role="list" className="flex flex-col">
              <li className="border-b-2 flex border-gray-300 hover:bg-sky-100 hover:border-sky-950 ">
                <NavLink
                  to="/"
                  className=" font-medium w-full p-6 flex justify-between"
                >
                  Product
                  <FontAwesomeIcon
                    className=" h-4 object-fit self-center px-3"
                    icon={faChevronRight}
                    style={{ color: "#374151" }}
                  />
                </NavLink>
              </li>
              <li className="border-b-2 flex border-gray-300 hover:bg-sky-100 hover:border-sky-950 ">
                <NavLink
                  to="/"
                  className=" font-medium w-full p-6 flex justify-between"
                >
                  Learn
                  <FontAwesomeIcon
                    className=" h-4 object-fit self-center px-3"
                    icon={faChevronRight}
                    style={{ color: "#374151" }}
                  />
                </NavLink>
              </li>
              <li className="border-b-2 flex border-gray-300 hover:bg-sky-100 hover:border-sky-950 ">
                <NavLink
                  to="/"
                  className=" font-medium w-full p-6 flex justify-between"
                >
                  Contact
                  <FontAwesomeIcon
                    className=" h-4 object-fit self-center px-3"
                    icon={faChevronRight}
                    style={{ color: "#374151" }}
                  />
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="mx-6">
            <NavLink className="btn block" to="/">
              Sign in
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;