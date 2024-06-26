import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import LeadUpWhite from "../../assets/LeadUpWhite.svg";
import LeadUpIconWhite from "../../assets/LeadUpIconWhite.svg";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faHeadphones,
  faPeopleGroup,
  faTableList,
  faTruckFront,
} from "@fortawesome/free-solid-svg-icons";
import UserAvatar from "../ui/userAvatar";
import { useState } from "react";

function HeaderWorkSpace({ user }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      style={{ width: "-webkit-fill-available" }}
      className=" absolute mr-3 sm:col-span-12 rounded-custom md:m-0 md:rounded-none px-3 py-2  md:relative md:grid md:px-3 md:py-5 md:row-span-2 md:col-span-2 md:border-2 md:border-y-0 md:border-r-surface-dark md:border-l-0 bg-primary text-white"
    >
      <nav className=" hidden md:flex flex-col justify-between">
        <ul
          role="list"
          className="m-0 md:grid md:grid-cols-1 md:divide-y md:gap-7"
        >
          <li>
            <NavLink className=" flex justify-center">
              <img
                className=" hidden lg:h-8 lg:inline-block"
                src={LeadUpWhite}
                alt="LeadUp Logo"
              />
              <img
                className=" hidden md:inline-block lg:hidden  md:h-6"
                src={LeadUpIconWhite}
                alt="LeadUp Logo"
              />
            </NavLink>
          </li>
          <div className="md:py-7 md:flex flex-col gap-3">
            <li>
              <NavLink className="navlink" to="/leadUp/workspace/dashboard">
                <div>
                  <FontAwesomeIcon icon={faTableList} />
                  <p className=" m-0">Dashboard</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/leadUp/workspace/calendar">
                <div>
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <p className=" m-0">Calendar</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/leadUp/workspace/team">
                <div>
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  <p className=" m-0">Team</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/leadUp/workspace/vehicles">
                <div>
                  <FontAwesomeIcon icon={faTruckFront} />
                  <p className=" m-0">Vehicles</p>
                </div>
              </NavLink>
            </li>
          </div>
        </ul>
        <ul
          role="list"
          className="m-0 md:grid md:grid-cols-1 md:divide-y md:gap-2"
        >
          <div className="md:py-2 md:flex flex-col gap-3">
            <li>
              <NavLink className="navlink" to="/leadUp/workspace/support">
                <div>
                  <FontAwesomeIcon icon={faHeadphones} />
                  <p className=" m-0">Support</p>
                </div>
              </NavLink>
            </li>
          </div>
          <li className="py-3" id={user.id}>
            <NavLink className="flex items-center justify-center">
              <UserAvatar img={user.photo} name={user.name} />
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className=" md:hidden">
        <ul role="list" className=" flex flex-row justify-between items-center">
          <li>
            <NavLink className="">
              <img
                className=" h-[1.5rem] "
                src={LeadUpIconWhite}
                alt="LeadUp Logo"
              />
            </NavLink>
          </li>
          <li>
            <button
              className=" flex"
              onClick={(ev) => {
                ev.preventDefault();
                setIsActive(!isActive);
              }}
            >
              <FontAwesomeIcon
                icon={!isActive ? faBars : faClose}
                className=" text-[1.5rem]"
              />
            </button>
          </li>
        </ul>
        <ul
          role="list"
          className={` absolute bg-primary right-0 rounded-custom  top-[3rem] z-50  overflow-hidden flex flex-col gap-2 ${
            isActive ? " p-2 h-auto" : "h-0"
          } `}
        >
          <li>
            <NavLink className="navlink" to="/leadUp/workspace/dashboard">
              <div>
                <FontAwesomeIcon icon={faTableList} />
                <p className=" m-0">Dashboard</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/leadUp/workspace/calendar">
              <div>
                <FontAwesomeIcon icon={faCalendarDays} />
                <p className=" m-0">Calendar</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/leadUp/workspace/team">
              <div>
                <FontAwesomeIcon icon={faPeopleGroup} />
                <p className=" m-0">Team</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/leadUp/workspace/vehicles">
              <div>
                <FontAwesomeIcon icon={faTruckFront} />
                <p className=" m-0">Vehicles</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

HeaderWorkSpace.propTypes = {
  user: PropTypes.object,
};
export default HeaderWorkSpace;
