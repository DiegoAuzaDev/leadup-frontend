import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function EmptyList ({title, text, redirect, redirectText}){
    return (
      <div className="flex flex-col items-center">
        <h3 className="text-[1.266rem] md:text-[1.44rem] lg:text-[1.563rem] m-0">
          {title}
        </h3>
        <p>{text}</p>
        <Link to={redirect} className="btn">{redirectText}</Link>
      </div>
    );
}

EmptyList.propTypes = {
    title : PropTypes.string,
    text : PropTypes.string,
    redirect : PropTypes.string,
    redirectText : PropTypes.string
}

export default EmptyList;