import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
function SectionTitle({ title, icon, redirect }) {
  return <div className="flex flex-row justify-between   border-b-2 pb-2 border-surface-dark">
    <div className="flex items-center gap-2 text-primary-dark">
        <FontAwesomeIcon icon={faNetworkWired} />
        <p className=" m-0 capitalize font-bold">{title || "Manage your Deliveries"}</p>
    </div>
    <NavLink to={redirect} className="btn--outline inline-block">See all</NavLink>
  </div>;
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  redirect : PropTypes.string
};

export default SectionTitle;