import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


function getFirstTwoLetters(name) {
  // Split the name by space to handle multiple words
  const words = name.split(" ");

  // If the name has multiple words
  if (words.length > 1) {
    // Return the first two letters of the first word
    return words[0].substr(0, 2);
  } else {
    // If the name has only one word, return the first two letters of that word
    return name.substr(0, 2);
  }
}

function UserAvatar({name, img}) {
  return (
    <div className=" bg-surface w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2  border-surface hover:bg-primary hover:text-surface text-primary transition duration-300 ease-in-out overflow-hidden font-bold">
      {!name && !img && (
        <FontAwesomeIcon icon={faUser} className=" inline-block text-lg" />
      )}
      {!img && name && (
        <span className=" uppercase">{getFirstTwoLetters(name)}</span>
      )}
      {name && img && <img src={img} referrerPolicy="no-referrer" alt="" />}
    </div>
  );
}

UserAvatar.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};
export default UserAvatar;
