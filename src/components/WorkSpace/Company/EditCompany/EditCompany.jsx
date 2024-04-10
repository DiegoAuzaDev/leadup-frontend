/* eslint-disable no-unused-vars */
import { useState } from "react";
import PickLocationOnMap from "../../MapComponent/PickLocationOnMap";
import PropTypes from "prop-types";

function EditCompany({ companyCollection, selectedCompanyId, setCompanyData }) {
  const findSelectedCompanyById = companyCollection.find(
    ({ _id }) => _id == selectedCompanyId
  );
  const [newMarkerPosition, setNewMarkerPosition] = useState({
    lat: Number(findSelectedCompanyById.location.latitude),
    lng: Number(findSelectedCompanyById.location.longitude),
  });
  return (
    <div className="  flex flex-col gap-8 lg:flex-row md:flex-1 md:gap-4 h-[-webkit-fill-available]">
      <section className=" flex  flex-col lg:w-1/2 md:gap-7 md:flex-row lg:flex-col">
        <div>
          <h2 className="text-3xl md:text-3xl lg:text-3xl">
            Updating your data has never been easier
          </h2>
          <p>
            In order to update your company data, you need to provide a valid
            name, address, and phone number.
          </p>
        </div>
      </section>
      <section className=" lg:w-1/2  flex  flex-col h-[70vh] lg:h-[auto]">
        <h3 className="text-3xl md:text-3xl lg:text-3xl">
          Drag and drop to select a new location{" "}
        </h3>
        <div className="bg-gray-200 h-[40vh] rounded-md flex justify-center items-center flex-col flex-1 overflow-hidden z-[0] p-2">
          <PickLocationOnMap
            setMarkerCenter={setNewMarkerPosition}
            markerCenter={newMarkerPosition}
          />
        </div>
      </section>
    </div>
  );
}

EditCompany.propTypes = {
  companyCollection: PropTypes.array,
  selectedCompanyId: PropTypes.string,
  setCompanyData: PropTypes.func,
};

export default EditCompany;
