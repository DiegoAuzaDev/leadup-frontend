import { useEffect } from "react";
import PropTypes from "prop-types";

function SelectYear({ setYear }) {
  const minYear = 1990;
  const currentYear = new Date().getFullYear();
  const yearsArray = [];
  for (let year = minYear; year <= currentYear; year++) {
    yearsArray.push(year);
  }
  useEffect(() => {
    setYear(minYear);
  }, []);
  return (
    <select
      className="input"
      name="year"
      id="year"
      onChange={(ev) => {
        setYear(ev.target.value);
      }}
    >
      {yearsArray.map((year) => (
        <option value={year} key={year} className="capitalize">
          {year}
        </option>
      ))}
    </select>
  );
}

SelectYear.propTypes = {
  setYear: PropTypes.func,
};
export default SelectYear;
