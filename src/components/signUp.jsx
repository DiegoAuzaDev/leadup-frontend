import { useEffect, useState } from "react";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validateInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SignUp() {
  useEffect(() => {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-primary");
  }, []);

  const buttonStateEnum = {
    name: "next",
    email: "confirm",
    password: "submit",
  };

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formState, setFormState] = useState(buttonStateEnum.name);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPasswordActive, setIsPasswordActive] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [isInvalidAuth, setIsInvalidAuth] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    switch (formState) {
      case buttonStateEnum.name:
        setIsEmailActive(true);
        setFormState(buttonStateEnum.email);
        break;
      case buttonStateEnum.email:
        setIsPasswordActive(true);
        setFormState(buttonStateEnum.password);
        break;
      case buttonStateEnum.password:
        console.log("submit data")
        break;
      default:
    }
  };

  const nameValidation = (ev) => {
    let name = ev.target.value;
    setName(name);
    setNameError(validateName(name));
  };
  const emailValidation = (ev) => {
    let email = ev.target.value;
    setEmail(email);
    setEmailError(validateEmail(email));
  };

  const passwordValidation = (ev) => {
    let password = ev.target.value;
    setPassword(password);
    setPasswordError(validatePassword(password));
  };

  return (
    <div className="bg-white py-7 px-5 lg:px-[1.5rem] grid col-span-12  col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 gap-5 mb-[5rem] fadeInBottom rounded-custom text-primary">
      <div>
        <h1 className="m-0 font-bold">Sign up to Lead Up</h1>
        <p>
          Welcome to Lead Up! Get ready to save time, improve performance and
          <br />
          scale your team
        </p>
      </div>
      <form onSubmit={submitForm} className=" grid grid-cols-12 gap-5">
        <div className=" col-span-12 md:col-span-9">
          <label
            htmlFor="name"
            className="flex flex-col text-primary-light font-bold mb-2"
          >
            Enter your name *
            <input
              autoComplete="name"
              required
              type="text"
              id="name"
              className={`input ${nameError ? "input-error" : ""}`}
              placeholder="Enter your name"
              value={name}
              onChange={(ev) => nameValidation(ev)}
            />
          </label>
          <small className=" text-red text-base md:text-[1.05rem] lg:text-[1.1rem]">
            {nameError}
          </small>

          {isEmailActive && (
            <>
              <label
                htmlFor="email"
                className="mt-8 flex flex-col text-primary-light font-bold mb-2 inputFadeIn"
              >
                Email address *
                <input
                  autoComplete="email"
                  required
                  type="text"
                  id="email"
                  className={`input ${emailError ? "input-error" : ""}`}
                  placeholder="LeadUp@example.com"
                  value={email}
                  onChange={(ev) => emailValidation(ev)}
                />
              </label>
              <small className=" text-red text-base md:text-[1.05rem] lg:text-[1.1rem]">
                {emailError}
              </small>
            </>
          )}
          {isPasswordActive && (
            <>
              <div className="mt-8">
                <label
                  htmlFor="password"
                  className="text-base md:text-[1.05rem] lg:text-[1.1rem] flex flex-col"
                >
                  Password *
                  <div className="grid grid-cols-12">
                    <input
                      autoComplete="password"
                      type={inputType}
                      id="password"
                      required
                      value={password}
                      onChange={(ev) => passwordValidation(ev)}
                      className={`input ${
                        passwordError ? "input-error" : ""
                      } col-span-10`}
                      placeholder="Enter your password"
                    />
                    <button
                      className=" w-6 mx-2"
                      type="button"
                      onClick={(ev) => {
                        ev.stopPropagation();
                        if (inputType == "password") {
                          setInputType("text");
                        } else {
                          setInputType("password");
                        }
                      }}
                    >
                      <FontAwesomeIcon
                        icon={inputType == "password" ? faEye : faEyeSlash}
                        className=" inline-block text-primary"
                      />
                    </button>
                  </div>
                </label>
              </div>
              <small className=" text-red text-base md:text-[1.05rem] lg:text-[1.1rem]">
                {passwordError}
              </small>
            </>
          )}
        </div>
        <div className=" flex flex-col justify-end items-end col-span-12 md:col-span-3">
          <button
            type="submit"
            className=" btn"
            disabled={nameError || emailError || passwordError}
          >
            {formState}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
