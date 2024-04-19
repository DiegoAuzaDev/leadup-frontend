import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
function ErrorWorkspace ({message}){
    return (
      <div className=" col-span-10 col-start-2 md:col-span-10 md:row-span-2 flex flex-col pr-3 justify-center items-center">
        <p className="text-[4.027rem] md:text-[5.986rem] lg:text-[7.815rem] font-bold text-primary">
          Oops ...
        </p>
        <p className=" underline text-[1.266rem] md:text-[1.44rem] lg:text-[1.563rem] text-primary">
          {message}
        </p>
        <p className=" text-center">
          Double check your internet connection and sign in again. If the error
          persists, contact us.
        </p>
        <NavLink className={"btn"} to={"/"}>
          Go home
        </NavLink>
      </div>
    );
}

ErrorWorkspace.propTypes = {
  message: PropTypes.string,
};


export default ErrorWorkspace;