/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import MapComponent from "../MapComponent/MapComponent";
//
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
function DashBoard() {
  const [userData, companyData] = useOutletContext();
  const [selectedCompany, setSelectedCompany] = useState({});
  console.log("hello")
  useEffect(() => {
    if (companyData.length != 0) {
      setSelectedCompany(companyData[0]);
    }
  }, [companyData]);
  
  return (
    <>
      <div className=" flex flex-col gap-8 lg:flex-row md:flex-1 md:gap-4">
        <section className=" flex  flex-col lg:w-1/3 md:gap-7 md:flex-row lg:flex-col">
          <div className=" lg:mb-4 md:w-1/2 lg:w-[auto]">
            <div className="mb-4">
              <h2 className="m-0 text-3xl md:text-3xl lg:text-3xl">
                Dashboard
              </h2>
              <small>Sync your team with your routes</small>
            </div>
            <div
              className={`${
                Object.keys(companyData).length === 0 && "animate-pulse"
              } transition-all ease-in-out duration-500 bg-gray-200 rounded-md min-h-[190px]  flex flex-col gap-5 px-3 py-5`}
            >
              {Object.keys(companyData).length === 0 && (
                <>
                  <div className=" bg-gray-300 h-8 mt-2 w-2/3 rounded-md"></div>
                  <div className=" bg-gray-300 h-10 rounded-md"></div>
                  <div className=" bg-gray-300 h-6 w-1/3 rounded-md"></div>
                </>
              )}
              {Object.keys(companyData).length != 0 && !companyData.error ? (
                <>
                  <div>
                    <p className="text-center lg:text-left">
                      Your company list is empty
                    </p>
                    <small>
                      In order to make use all the advantanges you need to
                      create a new company
                    </small>
                  </div>
                  <button className="btn sm:self-auto  md:self-baseline lg:self-baseline">
                    Add new company
                  </button>
                </>
              ) : (
                companyData.error && (
                  <>
                    <p className=" text-center m-0">
                      There was an error getting your data
                    </p>
                    <small className=" font-light">
                      remeber to double check your conection and ig there error
                      persist try again later
                    </small>
                    <button
                      className="btn btn--danger"
                      onClick={() => {
                        window.location.reload();
                      }}
                    >
                      Reload page
                    </button>
                  </>
                )
              )}
            </div>
          </div>

          <div className=" hidden   flex-1 md:flex flex-col">
            <div className="mb-4">
              <h3 className="m-0 text-2xl md:text-2xl lg:text-2xl">
                Your deliveries
              </h3>
              <small>Keep your items onder control</small>
            </div>
            <div className="bg-gray-200 h-[auto] rounded-md flex-1"></div>
          </div>
        </section>
        <section className=" lg:w-2/3  flex  flex-col h-[70vh] lg:h-[auto]">
          <div className=" mb-4">
            <h3 className="m-0 text-3xl md:text-3xl lg:text-3xl">
              Your map view
            </h3>
            <small>Find your active deliveries list</small>
          </div>
          <div className="bg-gray-200 h-[40vh] rounded-md flex justify-center items-center flex-col flex-1 overflow-hidden z-[0]">
            {/* {Object.keys(companyData).length === 0 && (
              <div role="status" className=" flex flex-col gap-2">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-400 animate-spin  fill-sky-600 self-center"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <small className="">Loading...</small>
              </div>
            )}
            {(companyData.empty == true) != 0 && !companyData.error ? (
              <div className=" flex  flex-col gap-2">
                <FontAwesomeIcon icon={faFolderOpen} className=" self-center" />
                <small>No company selected</small>
              </div>
            ) : (
              companyData.error && (
                <>
                  <p>There was an error</p>
                </>
              )
            )}
            {Object.keys(companyData).length != 0 && !companyData.empty ? (
              // <MapComponent centerPoint={selectedCompany.location} />
            ) : null} */}
          </div>
        </section>
      </div>
    </>
  );
}

export default DashBoard;
