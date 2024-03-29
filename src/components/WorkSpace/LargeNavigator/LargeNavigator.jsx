import PropTypes from "prop-types";
import Logo from "../../../assets/LeadUpBlack.png";
import { NavLink } from "react-router-dom";
import ErrorImage from "../../../assets/avatar.png";

function LargeNavigator({ user, logout, error }) {
  return (
    <nav
      className={`hidden  md:h-[100vh] md:flex md:flex-col md:py-6 justify-evenly md:px-4 md:min-w-[175px] gap-3 overflow-scroll ${
        error ? "animate-none" : !user ? "animate-pulse" : "animate-none"
      } `}
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
          {!user && !error && <div className="w-12 rounded-full h-12 bg-slate-500"></div>}
          {!user &&
            error && (
              <img
                src={ErrorImage}
                alt="Profile photo"
                className=" w-12 rounded-full h-12"
              />
            )}
            {user && !error && (
               <img
                src={user.photo}
                alt="Profile photo"
                className=" w-12 rounded-full h-12"
              />

            )}
        </button>

        <button
          className="py-2 text-center"
          to="/workspace/settings"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

LargeNavigator.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  error: PropTypes.string,
};

export default LargeNavigator;

