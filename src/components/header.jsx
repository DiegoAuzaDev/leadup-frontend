import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoColor from "../assets/LeadUp.svg";
import Logowhite from "../assets/LeadUpWhite.svg";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header({ isAuth }) {
  const location = useLocation();
  const isSignup = location.pathname === "/auth/signUp";
  const isSignin = location.pathname === "/auth/signIn";
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      className={`${
        isSignin || isSignup ? "" : "fixed"
      } top-0 pt-7 pb-7 w-full px-[1.5rem] fadeInTop  z-50 ${
        isAuth ? " bg-primary" : ""
      }`}
    >
      {!isAuth && (
        <nav
          className={`container-main border-2 border-primary px-[15px] py-[15px] rounded-custom bg-white`}
          style={{ borderBottomRightRadius: `${!isActive ? "20px" : "0px"}` }}
        >
          <ul role="list" className="hidden lg:grid grid-cols-3">
            <li className="flex items-center">
              <a href="/#home" className=" block">
                <img src={LogoColor} alt="LeadUp Logo" className=" h-[25px]" />
              </a>
            </li>
            <div className="flex justify-center">
              <li className="text-primary">
                <a
                  href="/#home"
                  className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold "
                >
                  Contact
                </a>
              </li>
            </div>
            <div className="flex justify-end gap-[20px]">
              <li>
                <NavLink className="btn block" to={"/auth/signUp"}>
                  Sign up
                </NavLink>
              </li>
              <li>
                <NavLink className="btn--outline block" to={"/auth/signIn"}>
                  Sign in
                </NavLink>
              </li>
            </div>
          </ul>

          <ul
            role="list"
            className="grid grid-cols-2  md:grid-cols-3 lg:hidden"
          >
            <li className=" hidden md:flex">
              <NavLink className="btn block" to={"/auth/signUp"}>
                Sign up
              </NavLink>
            </li>
            <li className="flex items-center md:justify-center">
              <a href="/#home" className="px-[0.5em]">
                <img src={LogoColor} alt="LeadUp Logo" className=" h-[25px]" />
              </a>
            </li>
            <li className=" flex items-center justify-end">
              <button
                className="px-[0.5em] py-[0.5em] inline"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                <FontAwesomeIcon
                  icon={!isActive ? faBars : faClose}
                  style={{ fontSize: "1.5rem" }}
                />
              </button>
            </li>
          </ul>
          <ul
            role="list"
            className=" lg:hidden  top-[135px] right-[1.5rem] border-2 border-primary px-[15px] py-[15px] rounded-custom flex flex-col gap-[20px] z-50 bg-white"
            style={{
              borderTopRightRadius: `"20px"`,
              position: "absolute",
              display: `${!isActive ? "none" : ""}`,
            }}
          >
            <li>
              <a
                href="/#home"
                className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#services"
                className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold "
              >
                Contact
              </a>
            </li>
            <li>
              <NavLink to={"/auth/signIn"} className="btn--outline block">
                sign in
              </NavLink>
            </li>
            <li className="md:hidden">
              <NavLink to={"/auth/signUp"} className="btn block">
                sign up
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      {isAuth && (
        <nav className="container-main px-[15px] py-[15px]">
          <ul role="list" className=" grid grid-cols-1 gap-4 md:grid-cols-2">
            <li className=" flex justify-center md:justify-start items-center">
              <a href="/#home" className=" block">
                <img src={Logowhite} alt="LeadUp Logo" className=" h-[25px]" />
              </a>
            </li>
            <li className=" flex gap-2 text-white flex-wrap justify-center md:justify-end">
              <p className=" m-0">
                {!isSignup ? "Create your account" : "Already have an account?"}
              </p>
              <a
                href={!isSignup ? "/auth/signUp" : "/auth/signIn"}
                className=" underline text-primary-light"
              >
                {!isSignup ? "sign up now" : "sign in now"}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

Header.propTypes = {
  isAuth: PropTypes.bool,
};

export default Header;
