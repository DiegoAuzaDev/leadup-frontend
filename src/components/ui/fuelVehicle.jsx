import PropTypes from "prop-types";
function FuelVehicle({ fuel, setFuel }) {
  const diesel = "Diesel";
  const gasoline = "Gasoline";
  const electric = "Electric";
  const hybrid = "Hybrid";
  return (
    <>
    <p className="m-0 font-bold text-primary-light">Select Fuel Type</p>
      <div className=" overflow-hidden border-2 rounded-custom grid divide-y md:grid-cols-4 md:divide-x md:divide-y-0">
        <button
          value={diesel}
          onClick={(ev) => {
            ev.preventDefault();
            setFuel(ev.target.value);
          }}
          className={`defult--btn rounded-none hover:selected  ${
            fuel === diesel ? "selected" : " "
          }`}
        >
          Diesel
        </button>
        <button
          value={gasoline}
          onClick={(ev) => {
            ev.preventDefault();
            setFuel(ev.target.value);
          }}
          className={`defult--btn rounded-none hover:selected  ${
            fuel === gasoline ? "selected" : " "
          }`}
        >
          Gasoline
        </button>
        <button
          value={electric}
          onClick={(ev) => {
            ev.preventDefault();
            setFuel(ev.target.value);
          }}
          className={`defult--btn rounded-none hover:selected  ${
            fuel === electric ? "selected" : " "
          }`}
        >
          Electric
        </button>
        <button
          onClick={(ev) => {
            ev.preventDefault();
            setFuel(ev.target.value);
          }}
          value={hybrid}
          className={`defult--btn rounded-none hover:selected  ${
            fuel === hybrid ? "selected" : " "
          }`}
        >
          Hybrid
        </button>
      </div>
    </>
  );
}

export default FuelVehicle;

FuelVehicle.propTypes = {
  fuel: PropTypes.string,
  setFuel: PropTypes.func,
};
