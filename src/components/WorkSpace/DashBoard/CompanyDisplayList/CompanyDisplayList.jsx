
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faFileEdit,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function CompanyDisplayList ({
  selectedCompany,
  setSelectedCompany,
  arrayCompany,
}){
  const handleChange = (ev) => {
    setSelectedCompany(arrayCompany[ev.target.value]);
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        <form
          className=" flex flex-col gap-x-4 gap-y-2"
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
        >
          <label
            htmlFor="company-selected"
            className=" text-base flex items-center text-black"
          >
            Select your target company
          </label>
          <select
            onChange={handleChange}
            id="company-selected"
            className="bg-sky-500 border cursor-pointer text-sm  font-medium rounded-lg p-2.5  flex-1 placeholder-gray-400 text-sky-950  focus:ring-sky-500  focus:border-blue-500"
          >
            {arrayCompany.map((element, index) => (
              <option key={element._id} value={index}>
                {element.name}
              </option>
            ))}
          </select>
        </form>
        <section className="border-dashed border-2 border-gray-500 rounded-md p-2 flex flex-col gap-4">
          <div className="flex gap-3">
            <FontAwesomeIcon
              icon={faBuilding}
              className=" self-center"
              style={{ color: "#4b5563" }}
            />
            <p className="m-0">{selectedCompany.name}</p>
          </div>
          <div className="flex gap-3">
            <FontAwesomeIcon
              icon={faMapPin}
              className=""
              style={{ color: "#4b5563" }}
            />
            <p className="m-0">{selectedCompany.address}</p>
          </div>
        </section>
        <div className="flex lg:justify-end">
          <NavLink
            role="button"
            className="btn  flex-1 lg:flex-none"
            to={`/workspace/company?company=${selectedCompany._id}`}
          >
            <FontAwesomeIcon
              icon={faFileEdit}
              className=" mx-2"
              style={{ color: "#082f49" }}
            />
            Edit company
          </NavLink>
        </div>
      </div>
    </>
  );
}


CompanyDisplayList.propTypes = {
  selectedCompany: PropTypes.object,
  setSelectedCompany: PropTypes.func,
  arrayCompany: PropTypes.array,
};

export default CompanyDisplayList