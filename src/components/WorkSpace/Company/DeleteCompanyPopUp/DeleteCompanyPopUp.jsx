
import PropTypes from "prop-types";
import LoadingIndicator from "../../LoadingIndicator/LodingIndicator";
import deleteCompany from "../../../../utils/company/deleteCompany";
import { useState } from "react";
function DeletePopUp({
  companyToDelete,
  setIsActive,
  token,
  companyList,
  setCompanyData,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    setIsLoading(true);
    const result = await deleteCompany(companyToDelete, token);
    if (typeof result == "object") {
      const newCompanyData = companyList.filter(
        (item) => item._id !== companyToDelete
      );
      setIsLoading(false);
      setCompanyData(newCompanyData);
    }
    setIsActive(false);
  };
  return (
    <>
      <div className="fixed bg-[#00000082] top-0 h-[100vh] left-0 w-[100vw] flex">
        <div className="bg-gray-200 max-w-fit m-auto rounded-md overflow-hidden">
          <div className=" w-[400px] min-h-[200px] flex">
            {isLoading && (
              <div className="flex justify-center m-auto flex-col gap-3">
                <LoadingIndicator loadingText={"Deleting data..."} />
              </div>
            )}
            {!isLoading && (
              <div>
                <p className="border-2 border-b-white py-4 px-4">
                  Are you sure you want to delete
                </p>
                <p className="px-4">
                  This action will delete all data related to the selected
                  company, such as deliveries and employees.
                </p>
                <div className="p-4 flex flex-row gap-4">
                  <button
                    className="btn--outline"
                    onClick={() => {
                      setIsActive(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn--danger"
                    onClick={() => {
                      handleDelete();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


DeletePopUp.propTypes = {
  companyToDelete: PropTypes.string,
  setCompanyData: PropTypes.func,
  setIsActive: PropTypes.func,
  token: PropTypes.string,
  companyList: PropTypes.array,
};

export default DeletePopUp;