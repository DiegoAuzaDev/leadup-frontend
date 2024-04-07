import PropTypes from "prop-types";
import Logo from "../../../assets/LeadUpBlack.png";
import AvatarImage from "../../../assets/avatar.png";
import { NavLink } from "react-router-dom";
import ErrorImage from "../../../assets/avatar.png";

function LargeNavigator({ user, logout, error }) {
  const isUserLoading = !user && !error;

  return (
    <nav
      className={`hidden md:h-[100vh] md:flex md:flex-col md:py-6 justify-evenly md:px-4 md:min-w-[175px] gap-3 overflow-scroll ${
        error
          ? "animate-none"
          : isUserLoading
          ? "animate-pulse"
          : "animate-none"
      }`}
    >
      <div>
        <img src={Logo} alt="Leadup logo" className="h-8 mx-3" />
      </div>
      <ul className="flex-1 divide-y-2 gap-1 min-h-[140px] overflow-scroll m-0">
        <NavItem to="/workspace/dashboard">Dashboard</NavItem>
        <NavItem to="/workspace/employee">Employee</NavItem>
        <NavItem to="/workspace/company">Company</NavItem>
        <NavItem to="/workspace/dashboard">Delivery</NavItem>
      </ul>
      <div className="flex flex-col gap-2">
        <button className="flex justify-center">
          <UserPhoto user={user} error={error} />
        </button>
        <button className="py-2 text-center btn--danger" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

function NavItem({ to, children }) {
  return (
    <li className="flex">
      <NavLink
        className="p-3 py-4 flex-1 hover:bg-gray-200 focus:bg-gray-200"
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

function UserPhoto({ user, error }) {
  if (error) {
    return (
      <img src={ErrorImage} alt="Error" className="w-12 rounded-full h-12" />
    );
  } else if (user) {
    return (
      <img
        src={user.photo ? user.photo : AvatarImage}
        alt="Profile"
        className="w-12 rounded-full h-12"
      />
    );
  } else {
    return <div className="w-12 rounded-full h-12 bg-slate-500"></div>;
  }
}

LargeNavigator.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  error: PropTypes.string,
};
NavItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};
UserPhoto.propTypes = {
  user: PropTypes.object,
  error: PropTypes.object,
};

export default LargeNavigator;
