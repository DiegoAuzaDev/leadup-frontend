import PropTypes from "prop-types";
import { useState } from "react";
import leadupLogoWhite from "../../assets/LeadUpIconWhite.webp";
import truck from "../../assets/truck.webp";
import { validateAddress, validateName } from "../../utils/validateInput";

function NewUser() {
  const [step, setStep] = useState(1);

  return (
    <section className="modal absolute h-full w-full bg-primary-dark bg-opacity-60 z-50 left-0 top-0 flex items-center justify-center">
      {<Welcome setStep={setStep} step={step} />}
      {step == 2 && <CreateCompany />}
    </section>
  );
}

const Welcome = ({ step, setStep }) => {
  const [stay, setStay] = useState(true);
  const [activeBtn, setActiveBtn] = useState(false);

  const controller = () => {
    setStep(step + 1);
    setStay(false);
    setActiveBtn(!activeBtn);
  };

  return (
    <div
      className={` bg-white absolute rounded-custom pb-6 flex flex-col items-center gap-4 m-4 modal-welcome  ${
        !stay ? "modal-exit" : ""
      }`}
    >
      <div className=" bg-primary-light  p-4 rounded-t-custom">
        <div className="flex flex-col items-center max-w-80 gap-4">
          <img src={leadupLogoWhite} alt="" className=" w-8" />
          <p className="text-[1.424rem] md:text-[1.728rem] lg:text-[1.953rem] font-bold text-white text-center m-0">
            Welcome to you workspace
          </p>
          <p className=" m-0 text-center font-light">
            Here you can find everything you need to lead your team. But first,
            it is time to set up your{" "}
            <span className="font-bold"> company.</span>
          </p>
        </div>
      </div>
      <button
        disabled={activeBtn}
        className="btn"
        onClick={() => {
          controller();
        }}
      >
        Get started
      </button>
    </div>
  );
};

const CreateCompany = ({ step, setStep }) => {
  const [stay, setStay] = useState(true);
  const [companyNameError, setCompanyNameError] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("")
  const [companyAddressError, setCompanyAddressError] = useState("")

  const companyNameValidation = (ev) => {
    let companyName = ev.target.value;
    setCompanyName(companyName);
    setCompanyNameError(validateName(companyName))
  };

  const companyAddressValidation = (ev)=>{
    let address = ev.target.value;
    setCompanyAddress(address)
    setCompanyAddressError(validateAddress(address))
  }


  return (
    <div
      className={`rounded-custom  bg-white relative pb-6  flex flex-col gap-4 overflow-hidden m-4 modal-slide ${
        !stay ? "modal-exit" : ""
      }`}
    >
      <div className=" bg-primary-light py-4 px-10">
        <h4 className=" text-white font-bold m-0">Create your company</h4>
      </div>
      <form action="" className="px-4 gap-2 flex flex-col">
        <label
          htmlFor="companyName"
          className="text-base md:text-[1.05rem] lg:text-[1.1rem] flex flex-col"
        >
          Company Name
          <input
            type="text"
            value={companyName}
            onChange={(ev) => {
              companyNameValidation(ev);
            }}
            id="companyName"
            placeholder="Add the name of your company"
          />
        </label>
        <small className=" text-red text-base md:text-[1.05rem] lg:text-[1.1rem]">
          {companyNameError}
        </small>
        <label
          htmlFor="companyName"
          className="text-base md:text-[1.05rem] lg:text-[1.1rem] flex flex-col"
        >
          Company Address
          <input
            type="text"
            value={companyAddress}
            onChange={(ev) => {
              companyAddressValidation(ev);
            }}
            id="companyName"
            placeholder="Add the address of your company"
          />
        </label>
        <small className=" text-red text-base md:text-[1.05rem] lg:text-[1.1rem]">
          {companyAddressError}
        </small>
      </form>
    </div>
  );
};

Welcome.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
};

export default NewUser;
