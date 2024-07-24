import { useState } from "react";
import { Outlet } from "react-router-dom";
import FuelVehicle from "../ui/fuelVehicle";
function Vehicles() {
  const [createIsActive, setCreateIsActive] = useState(false);
  const [fuel, setFuel] = useState("");

  const createModal = () => {
    setCreateIsActive(!createIsActive);
    console.log(createIsActive);
  };
  return (
    <>
      <section className="row-span-2 col-span-full mt-10 md:col-span-10 md:my-5 md:mr-5 lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:divide-x-2 lg:divide-surface lg:gap-2 overflow-scroll">
        <div className=" lg:col-span-6 lg:row-span-full ">
          <div className="flex flex-wrap gap-2 justify-between items-center my-6 md:my-2">
            <p className=" capitalize m-0 font-bold">
              Keep track of your vehicle
            </p>
            <button
              className="btn"
              onClick={() => {
                createModal();
              }}
            >
              Add new vehicle
            </button>
          </div>
        </div>
        <div className=" lg:col-span-6 lg:row-span-full min-h-96">
          <Outlet />
        </div>
      </section>
      {createIsActive && (
        <section
          onClick={(ev) => {
            if (ev.target === ev.currentTarget) {
              createModal();
            }
          }}
          className=" absolute flex justify-center align-middle h-full w-full lg:hidden top-0 left-0 p-4 md:p-32"
        >
          <form className="bg-surface-light border-2 rounded-custom border-surface-dark m-auto p-5 inputFadeIn flex flex-col gap-4">
            <div className=" flex flex-col">
              <p className=" text-[1.424rem] md:text-[1.728rem] lg:text-[1.953rem] mt-4 font-bold text-center">
                Create a new vehicle and make your team bigger
              </p>
              <p className=" text-center m-0">
                Getting started with a new vehicle is easy and fast, we just
                need to collect some data such as its plate number, color, max
                capacity and so on.
              </p>
            </div>
            <FuelVehicle fuel={fuel} setFuel={setFuel}/>
            <div className=" flex flex-wrap gap-5">
              <button className="btn--outline">Cancel</button>
              <button className="btn">Create Vehicle</button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
export default Vehicles;
