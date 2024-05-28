import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
function ContainerMessage({ title, message, routeMessage, redirect }) {
  return (
    <section className=" px-4 py-8 text-primary grid grid-cols-1 bg-red-light rounded-custom gap-2">
      <p className="m-0">{`There was an error - ${title}`}</p>
      <p  className=" font-bold m-0">
        <span>Error Message - </span>
        <span className=" underline">{message}</span>
      </p>
      {routeMessage && (
        <NavLink className={" text-primary underline"} to={redirect}>{routeMessage}</NavLink>
      )}
    </section>
  );
}

ContainerMessage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  routeMessage: PropTypes.string,
  redirect: PropTypes.string,
};

export default ContainerMessage;
