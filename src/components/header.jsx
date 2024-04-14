import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoColor from "../assets/LeadUp.svg";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {

    // add navigation to id when click on items 

  const [isActive, setIsActive] = useState(false);

  return (
    <header className="fixed top-7 w-full px-[1.5rem] ">
      <nav
        className={`container-main border-2 border-primary px-[15px] py-[15px] rounded-border bg-white`}
        style={{ borderBottomRightRadius: `${!isActive ? "20px" : "0px"}` }}
      >
        <ul role="list" className="hidden md:flex flex-row justify-between">
          <li className="flex items-center">
            <NavLink className=" block">
              <img src={LogoColor} alt="LeadUp Logo" className=" h-[25px]" />
            </NavLink>
          </li>
          <div className="flex">
            <li>
              <a className="px-[1.5em] py-[0.5em] rounded-border hover:bg-surface block font-bold">
                Home
              </a>
            </li>
            <li>
              <a className="px-[1.5em] py-[0.5em] rounded-border hover:bg-surface block font-bold">
                Service
              </a>
            </li>
            <li>
              <a className="px-[1.5em] py-[0.5em] rounded-border hover:bg-surface block font-bold ">
                Contact
              </a>
            </li>
          </div>
          <div className="flex gap-[20px]">
            <li>
              <NavLink className="btn block">Sign up</NavLink>
            </li>
            <li>
              <NavLink className="btn--outline block">Sign in</NavLink>
            </li>
          </div>
        </ul>

        <ul role="list" className="flex justify-between md:hidden z-50">
          <li>
            <NavLink className="btn block">Sign up</NavLink>
          </li>
          <li className="flex items-center">
            <NavLink className="px-[0.5em]">
              <img src={LogoColor} alt="LeadUp Logo" className=" h-[25px]" />
            </NavLink>
          </li>
          <li className=" flex items-center">
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
          className=" md:hidden  top-[100px] right-[1.5rem] border-2 border-primary px-[15px] py-[15px] rounded-border flex flex-col gap-[20px] z-50"
          style={{
            borderTopRightRadius: `"20px"`,
            position: "absolute",
            display: `${!isActive ? "none" : ""}`,
          }}
        >
          <li>
            <a className="px-[1.5em] py-[0.5em] rounded-border hover:bg-surface block font-bold">
              Home
            </a>
          </li>
          <li>
            <a className="px-[1.5em] py-[0.5em] rounded-border hover:bg-surface block font-bold">
              Service
            </a>
          </li>
          <li>
            <a className="px-[1.5em] py-[0.5em] rounded-border hover:bg-surface block font-bold ">
              Contact
            </a>
          </li>
          <li>
            <NavLink className="btn--outline block">Home</NavLink>
          </li>
        </ul>
      </nav>
      <nav></nav>
    </header>
  );
}

export default Header;
