import { Outlet, Link } from "react-router-dom";
function Vehicles() {
  return (
    <section className="row-span-2 col-span-full mt-10 md:col-span-10 md:my-5 md:mr-5 lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:gap-2 bg-orange-300 overflow-scroll">
      <div className=" lg:col-span-6 lg:row-span-full bg-red min-h-96">
        <div className="flex flex-wrap gap-2 justify-between items-center my-6 md:my-2">
          <p className=" capitalize m-0 font-bold">
            Keep track of your vehicle
          </p>
          <Link className="btn">Add new vehicle</Link>
        </div>
      </div>
      <div className=" lg:col-span-6 lg:row-span-full bg-blue-500 min-h-96"></div>
    </section>
  );
}
export default Vehicles;
