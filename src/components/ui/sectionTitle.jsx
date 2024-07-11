import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SectionTitle({ title, icon, mainRedirect, mainButton, button, buttonRedirect }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between border-b-2 p-2 border-surface-dark">
      <div className="flex items-center gap-2 text-primary-dark">
        <FontAwesomeIcon icon={icon} />
        <h2 className=" m-0 capitalize font-bold text-center text-base md:text-[1.05rem] lg:text-[1.1rem]">
          {title || "Missing title"}
        </h2>
      </div>
      <Link
        to={`/leadUp/workspace/${mainRedirect}`}
        className="btn--outline inline-block capitalize"
      >
        {mainButton}
      </Link>
      {button ? <Link to={buttonRedirect}>{button}</Link> : null}
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  redirect: PropTypes.string,
  mainRedirect: PropTypes.string,
  mainButton: PropTypes.string,
  button: PropTypes.string,
  buttonRedirect : PropTypes.string
};

export default SectionTitle;