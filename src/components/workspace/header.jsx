import { NavLink } from "react-router-dom";
import LeadUpWhite from "../../assets/LeadUpWhite.svg";
import LeadUpIconWhite from "../../assets/LeadUpIconWhite.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarDays, faGear, faHeadphones, faPeopleGroup, faTableList, faTruckFront } from "@fortawesome/free-solid-svg-icons";

function HeaderWorkSpace() {
  return (
    <header
      className=" 
    md:grid
    md:px-3 md:py-5
    lg:px-3
    md:row-span-2 md:col-span-2
    border-2 border-y-0 border-r-surface-dark border-l-0 
    md:bg-primary 
    text-white"
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
          className="m-0 md:grid md:grid-cols-1 md:divide-y md:gap-7"
        >
          <div className="md:py-7 md:flex flex-col gap-3">
            <li>
              <NavLink className="navlink" to="/leadUp/workspace/settings">
                <div>
                  <FontAwesomeIcon icon={faGear} />
                  <p className=" m-0">Settings</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/leadUp/workspace/support">
                <div>
                  <FontAwesomeIcon icon={faHeadphones} />
                  <p className=" m-0">Support</p>
                </div>
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderWorkSpace;
