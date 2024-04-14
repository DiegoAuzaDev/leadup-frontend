import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoColor from "../assets/LeadUp.svg";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {

    // add navigation to id when click on items 

  const [isActive, setIsActive] = useState(false);

  return (
    <header className="fixed top-0 pt-7 pb-7 w-full px-[1.5rem] header-bg-color ">
      <nav
        className={`container-main border-2 border-primary px-[15px] py-[15px] rounded-custom bg-white`}
        style={{ borderBottomRightRadius: `${!isActive ? "20px" : "0px"}` }}
      >
        <ul role="list" className="hidden lg:grid grid-cols-3">
          <li className="flex items-center">
            <NavLink className=" block">
              <img src={LogoColor} alt="LeadUp Logo" className=" h-[25px]" />
            </NavLink>
          </li>
          <div className="flex justify-center">
            <li className="text-primary">
              <a
                href="#home"
                className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold"
              >
                Service
              </a>
            </li>
            <li>
              <a className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold ">
                Contact
              </a>
            </li>
          </div>
          <div className="flex justify-end gap-[20px]">
            <li>
              <NavLink className="btn block">Sign up</NavLink>
            </li>
            <li>
              <NavLink className="btn--outline block">Sign in</NavLink>
            </li>
          </div>
        </ul>

        <ul role="list" className="grid grid-cols-3 lg:hidden z-50">
          <li className="flex">
            <NavLink className="btn block">Sign up</NavLink>
          </li>
          <li className="flex items-center justify-center">
            <NavLink className="px-[0.5em]">
              <img src={LogoColor} alt="LeadUp Logo" className=" h-[25px]" />
            </NavLink>
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
              href="#home"
              className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold"
            >
              Service
            </a>
          </li>
          <li>
            <a className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface block font-bold ">
              Contact
            </a>
          </li>
          <li>
            <NavLink className="btn--outline block">sign in</NavLink>
          </li>
        </ul>
      </nav>
      <nav></nav>
    </header>
  );
}

export default Header;
