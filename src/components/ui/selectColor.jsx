import PropTypes from "prop-types";
import { useEffect } from "react";

function SelectColor({ setColor }) {
  const colors = ["Black", "White", "Gray", "Red", "Orange", "Blue", "Yellow"];
  useEffect(() => {
    setColor(colors[0]);
  }, []);
  return (
    <select
      className="input"
      name="color"
      id="color"
      onChange={(ev) => {
        setColor(ev.target.value);
      }}
    >
      {colors.map((color) => (
        <option value={color} key={color} className="capitalize">
          {color}
        </option>
      ))}
    </select>
  );
}

SelectColor.propTypes = {
  setColor: PropTypes.func,
};
export default SelectColor;
