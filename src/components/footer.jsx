import { NavLink } from "react-router-dom";
import LogoWhite from "../assets/LeadUpWhite.svg";

function Footer() {
  return (
    <footer className=" bg-primary px-[15px] py-10">
      <nav className="container-main">
        <ul
          className=" grid grid-cols-1 md:grid-cols-3 gap-5 md:flex-row md:justify-between"
          role="list"
        >
          <li className=" flex justify-center md:justify-start">
            <button className=" block">
              <img src={LogoWhite} alt="LeadUp Logo" className=" h-[25px]" />
            </button>
          </li>
          <div className=" text-white font-bold lg:flex justify-center">
            <li className=" flex justify-center">
              <a
                href="#home"
                className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface hover:text-primary"
              >
                Home
              </a>
            </li>
            <li className=" flex justify-center">
              <a
                href="#services"
                className=" px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface hover:text-primary"
              >
                Service
              </a>
            </li>
            <li className=" flex justify-center">
              <a
                href="#contact"
                className="px-[1.5em] py-[0.5em] rounded-custom hover:bg-surface hover:text-primary"
              >
                Contact
              </a>
            </li>
          </div>
          <li className=" flex flex-col gap-[20px] md:justify-between lg:flex-row lg:justify-end">
            <NavLink className="block btn">sign up</NavLink>
            <NavLink className="block btn--outline">sign in</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
