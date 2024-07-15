import PropTypes from "prop-types";
import { useState } from "react";
import leadupLogoWhite from "../../assets/LeadUpIconWhite.webp"

function NewUser() {
  const [step, setStep] = useState(1);

  return (
    <section className="modal absolute h-full w-full bg-primary-dark bg-opacity-60 z-50 left-0 top-0 flex items-center justify-center">
      <Welcome step={step} setStep={setStep} />
    </section>
  );
}

const Welcome = ({ step, setStep }) => {

  const [stay, setStay] = useState(true);
  const [activeBtn, setActiveBtn] = useState(false)

  const controller = ()=>{
    setStep(step + 1 );
    setStay(false)
    setActiveBtn(!activeBtn)
  }

  return (
    <div
      className={` bg-white rounded-custom relative pb-6 flex flex-col items-center gap-4 overflow-hidden m-4 modal-welcome ${
        !stay ? "modal-exit" : ""
      }`}
    >
      <div className=" bg-primary-light relative overflow-hidden  p-4 rounded-t-custom">
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

Welcome.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
};

export default NewUser;
