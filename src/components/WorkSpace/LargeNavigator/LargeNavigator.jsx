import PropTypes from "prop-types";
import Logo from "../../../assets/LeadUpBlack.png";
import { NavLink } from "react-router-dom";

function LargeNavigator({ user }) {
  return (
    <nav
      className={`hidden md:bg-white md:shadow-md md:h-[100vh] md:flex md:flex-col md:py-6 justify-evenly md:px-4 md:min-w-[175px] gap-3 overflow-scroll ${
        !user && "animate-pulse"
      }`}
    >
      <div>
        <img src={Logo} alt="Leadup logo" className=" h-8 mx-3" />
      </div>
      <ul className=" flex-1 divide-y-2 gap-1 min-h-[140px] overflow-scroll m-0">
        <li className="flex">
          <NavLink
            className="p-3 py-4 flex-1 hover:bg-gray-200 focus:bg-gray-200"
            to="/workspace/dashboard"
          >
            DashBoard
          </NavLink>
        </li>
        <li className="flex">
          <NavLink
            className="p-3 py-4 flex-1 hover:bg-gray-200 focus:bg-gray-200"
            to="/workspace/employee"
          >
            Employee
          </NavLink>
        </li>
        <li className="flex">
          <NavLink
            className="p-3 py-4 flex-1 hover:bg-gray-200 focus:bg-gray-200"
            to="/workspace/company"
          >
            Company
          </NavLink>
        </li>
        <li className="flex">
          <NavLink
            className="p-3 py-4 flex-1 hover:bg-gray-200 focus:bg-gray-200"
            to="/workspace/dashboard"
          >
            Delivery
          </NavLink>
        </li>
      </ul>
      <div className=" flex flex-col gap-2">
        <button className="flex justify-center">
          {!user && <div className="w-12 rounded-full h-12 bg-slate-500"></div>}
          {user && (
            <img
              src={user.photo}
              alt="Profile photo"
              className=" w-12 rounded-full h-12"
            />
          )}
        </button>
        <NavLink className="py-2 text-center" to="/workspace/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

LargeNavigator.propTypes = {
  user: PropTypes.object,
};

export default LargeNavigator;
