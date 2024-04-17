import { useEffect, useState } from "react";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validateInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { localSignup } from "../utils/localAuth";
import googleAuth from "../utils/googleAuth";
import GoogleLogo from "../assets/GoogleImage.webp";
import { NavLink } from "react-router-dom";
import ContainerMessage from "./containerMessage";

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
  const [isInvalidAuth, setIsInvalidAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (ev) => {
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
        setIsInvalidAuth(null);
        setIsLoading(true);
        handleResponse();
        break;
      default:
    }
  };

  const handleResponse = async () => {
    const response = await localSignup(name, email, password);
    console.log(response)
    if (!response.ok && response.status == 401) {
      setIsLoading(false);
      setIsInvalidAuth({
        title: "Email is already on use",
        message: response.statusText,
        routeMessage: "Sig in with your credentials",
        redirect: "/auth/signIn",
      });
      return 
    }
    if (!response.ok) {
      setIsLoading(false);
      setIsInvalidAuth({
        title: "Server Error",
        message: "server not OK",
        routeMessage: "try again laer",
        redirect: "/",
      });
      return 
    }
    if (response.ok && response.status == 200 && response.url) {
      window.location = response.url;
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
      {isInvalidAuth && (
        <ContainerMessage
          title={isInvalidAuth.title}
          message={isInvalidAuth.message}
          routeMessage={isInvalidAuth.routeMessage}
          redirect={isInvalidAuth.redirect}
        />
      )}

      {!isLoading && (
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
                <div className="mt-8 inputFadeIn">
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
      )}
      {isLoading && (
        <div role="status" className=" flex flex-col items-center gap-4">
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
          <p className="text-[1.424rem] md:text-[1.728rem] lg:text-[1.953rem] text-center font-bold">
            Creating new user ...
          </p>
        </div>
      )}
      <div className=" flex flex-wrap flex-col mt-5">
        <p className=" text-center">
          ----- Sign up with your Google account -----
        </p>
        <button
          className="btn--outline flex flex-wrap items-center justify-center gap-4"
          onClick={() => {
            googleAuth();
          }}
        >
          <img src={GoogleLogo} alt="google logo" className="h-[1.825rem]" />
          <p className="m-0">Sign up with Google</p>
        </button>
        <NavLink
          to={"/auth/signIn"}
          className="font-bold underline text-primary-light text-center my-4"
        >
          Sign in with your credentials
        </NavLink>
      </div>
    </div>
  );
}

export default SignUp;
