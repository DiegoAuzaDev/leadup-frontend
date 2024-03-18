import { NavLink } from "react-router-dom";
import Patter from "../../assets/patterBanner.png";
import "../../button.css";

function Banner() {
  return (
    <main>
      <div className=" pt-[8rem] pb-8 mb-7 md:h-[90vh] shadow-xl">
        <div
          className="md:absolute md:h-[90vh]  right-[-200px] top-0 md:inline-block md:w-[100vw]"
          style={{
            backgroundImage: `url(${Patter})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <section
          className="container-main md:flex md:items-center"
          style={{
            height: "-webkit-fill-available",
          }}
        >
          <div className="flex flex-col text-center divide-y divide-dashed divide-gray-400 md:w-1/2">
            <div className="mb-8">
              <h1 className=" text-sky-800 font-semibold mb-2">
                Lead your delivery list
              </h1>
              <p className="sm:text-base md:text-lg m-1 font-semibold">
                Align your routes easily
              </p>
              <p className="sm:text-sm md:text-base m-0 font-light">
                All you have been looking for in the same place in lees than{" "}
                <span className=" underline text-blue-500 font-normal">
                  5 minutes
                </span>
              </p>
            </div>
            <div className=" flex flex-col gap-3 py-4">
              <NavLink className="btn">Sign up</NavLink>
              <NavLink className="btn--outline">Learn more</NavLink>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Banner;
