import PropTypes from "prop-types";
import { Country, State, City } from "country-state-city";
import { useEffect, useState } from "react";
import leadupLogoWhite from "../../assets/LeadUpIconWhite.webp";
import {
  validateAddress,
  validateName,
  validatePhoneNumber,
} from "../../utils/validateInput";
import { useToken } from "../../context/tokenContext";
import { createCompanyNewUser } from "../../utils/workspace/user";

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
  const [token] = useToken();
  const [stay, setStay] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [companyNameError, setCompanyNameError] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyAddressError, setCompanyAddressError] = useState("");
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState("");
  const [companyPhoneNumberError, setCompanyPhoneNumberError] = useState("");

  const country = Country.getCountryByCode("CO");
  const allStates = State.getStatesOfCountry(country.isoCode);
  const [selectedEventState, setSelectedEventState] = useState(
    State.getStatesOfCountry(country.isoCode)[0].isoCode
  );
  const [allCity, setAllCity] = useState(
    City.getCitiesOfState(country.isoCode, selectedEventState)
  );
  const [selectedStateName, setSelectedStateName] = useState("");
  const [selectedEventCity, setSelectedEventCity] = useState("");

  const companyData = {
    numberExtension : 57,
    country : "CO",
    name: companyName,
    address: `${companyAddress} ${selectedEventCity}, ${selectedStateName}`,
    phoneNumber: [companyPhoneNumber],
  };
  useEffect(() => {
    setAllCity(City.getCitiesOfState(country.isoCode, selectedEventState));
  }, [country.isoCode, selectedEventState]);

  useEffect(() => {
    setSelectedEventCity(allCity[0].name);
  }, [allCity]);

  const companyNameValidation = (ev) => {
    let companyName = ev.target.value;
    setCompanyName(companyName);
    setCompanyNameError(validateName(companyName));
  };

  const companyPhoneNumberValidation = (ev) => {
    let number = ev.target.value;
    setCompanyPhoneNumber(number);
    setCompanyPhoneNumberError(validatePhoneNumber(number));
  };
  const companyAddressValidation = (ev) => {
    let address = ev.target.value;
    setCompanyAddress(address);
    setCompanyAddressError(validateAddress(address));
  };

  const hanldeForm = async () => {
    setIsLoading(true);
    try {
      const response = await createCompanyNewUser(companyData, token);
      if (response.ok && response.status == 201) {
        console.log("created successfully");
        const body = await response.json();
        console.log(body);
        setIsLoading(false);
      }
      if (!response.ok && response.status == 400) {
        throw new Error("Error creating new company, Error status : 400");
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };
  return (
    <div
      className={`rounded-custom  bg-white relative pb-6  flex flex-col gap-4 overflow-hidden m-4 modal-slide ${
        !stay ? "modal-exit" : ""
      }`}
    >
      {!isLoading ? (
        <>
          <div className=" bg-primary-light py-4 px-10">
            <h4 className=" text-white font-bold m-0">Create your company</h4>
          </div>
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              hanldeForm();
            }}
            className="px-4 gap-2 flex flex-col"
          >
            <label
              htmlFor="companyName"
              className="text-base md:text-[1.05rem] lg:text-[1.1rem] flex flex-col"
            >
              Company Name *
              <input
                required
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
              htmlFor="state-select"
              className="text-base md:text-[1.05rem] lg:text-[1.1rem] flex flex-col"
            >
              Select State *
              <select
                name="State"
                id="state-select"
                onChange={(ev) => {
                  const state = ev.target.value.split("|");
                  setSelectedStateName(state[0]);
                  setSelectedEventState(state[1]);
                }}
              >
                {allStates.map((state) => (
                  <option
                    value={`${state.name}|${state.isoCode}`}
                    key={`${state.name}`}
                  >
                    {state.name}
                  </option>
                ))}
              </select>
            </label>
            <label
              htmlFor="state-city"
              className="text-base md:text-[1.05rem] lg:text-[1.1rem] flex flex-col"
            >
              Select City *
              <select
                name="City"
                id="state-city"
                onChange={(ev) => {
                  setSelectedEventCity(ev.target.value);
                  console.log(ev.target.value);
                }}
              >
                {allCity.map((city) => (
                  <option
                    value={city.name}
                    key={`${city.latitude}-${city.name}`}
                  >
                    {city.name}
                  </option>
                ))}
              </select>
            </label>
            <label
              htmlFor="companyAddress"
              className="text-base md:text-[1.05rem] lg:text-[1.1rem] flex flex-col"
            >
              Company Address *
              <input
                required
                type="text"
                value={companyAddress}
                onChange={(ev) => {
                  companyAddressValidation(ev);
                }}
                id="companyAddress"
                placeholder="Add the address of your company"
              />
            </label>
            <small className="text-red text-base md:text-[1.05rem] lg:text-[1.1rem]">
              {companyAddressError}
            </small>
            <label
              htmlFor="companyNumber"
              className="text-base md:text-[1.05rem] lg:text-[1.1rem] flex flex-col"
            >
              Company Number *
              <input
                required
                type="text"
                value={companyPhoneNumber}
                onChange={(ev) => {
                  companyPhoneNumberValidation(ev);
                }}
                id="companyNumber"
                placeholder="Add the number of your company"
              />
            </label>
            <small className="text-red text-base md:text-[1.05rem] lg:text-[1.1rem]">
              {companyPhoneNumberError}
            </small>
            <button
              disabled={
                companyNameError ||
                companyAddressError ||
                companyPhoneNumberError
              }
              className="btn mt-2"
            >
              Create Company
            </button>
          </form>
        </>
      ) : (
        <div role="status" className=" flex flex-col items-center gap-4 p-4">
          <svg
            version="1.1"
            id="L7"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
            style={{ height: "5rem" }}
          >
            <path
              fill="#082F49"
              d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="2s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
            <path
              fill="#082F49"
              d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="-360 50 50"
                repeatCount="indefinite"
              />
            </path>
            <path
              fill="#082F49"
              d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="2s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
          <p className="text-[1.424rem] md:text-[1.728rem] lg:text-[1.953rem] text-center font-bold m-0.5">
            Creating your company
          </p>
        </div>
      )}
    </div>
  );
};

Welcome.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
};

export default NewUser;
