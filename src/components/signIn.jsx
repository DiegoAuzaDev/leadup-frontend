import { useEffect, useState } from "react";
import LogoWhite from "../assets/LeadUpIcon.svg";
import ContainerMessage from "./containerMessage";
import GoogleLogo from "../assets/GoogleImage.webp";
import { validateEmail, validatePassword } from "../utils/validateInput";
import googleAuth from "../utils/googleAuth";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { localSignin } from "../utils/localAuth";

function SignIn() {
  useEffect(() => {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-primary");
  }, []);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [passwordError, setPasswordError] = useState("");
  const [isInvalidAuth, setIsInvalidAuth] = useState(null);
  const [isLoading, setIsloading] = useState(false);

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

  const submitForm = async (ev) => {
    setIsloading(true);
    ev.preventDefault();
    setIsInvalidAuth(null);
    const response = await localSignin(email, password);
    if (!response.ok && response.status == 401) {
      setIsloading(false);
      const jsonResponse = await response.json();
      setIsInvalidAuth({
        title: "Invalid email or password",
        message: jsonResponse.message,
      });
    }
    if (!response.ok && response.status == 404) {
      setIsloading(false);
      const jsonResponse = await response.json();
      setIsInvalidAuth({
        title: "User not found",
        message: jsonResponse.message,
        routeMessage: "Create your account",
        redirect: "/auth/signUp",
      });
    }
    if (response.ok) {
      setIsloading(false);
      window.location = response.url;
    }
  };

  return (
    <div className=" bg-white py-7 px-2 lg:px-[1.5rem] grid col-span-12  col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 gap-5 mb-[5rem] fadeInBottom rounded-custom">
      <div className=" flex justify-center">
        <img src={LogoWhite} className=" h-[3.124rem]" alt="Lead Up Logo" />
      </div>
      <div>
        <p className=" text-center m-0 font-bold text-primary-light text-[1.266rem] md:text-[1.44rem] lg:text-[1.563rem]">
          Welcome back, ready to sync your team?
        </p>
        <h1 className="text-center m-0 font-bold">Sign in to Lead Up</h1>
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
        <form
          onSubmit={submitForm}
          className=" lg:px-[1rem] flex flex-col gap-6"
        >
          <fieldset className=" flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-base md:text-[1.05rem] lg:text-[1.1rem] flex flex-col"
            >
              Email address *
              <input
                autoComplete="email"
                required
                type="email"
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
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <div>
              <label
                htmlFor="password"
                className="text-base md:text-[1.05rem] lg:text-[1.1rem] flex flex-col"
              >
                Password *
                <div className=" flex flex-row">
                  <input
                    autoComplete="password"
                    type={inputType}
                    id="password"
                    required
                    value={password}
                    onChange={(ev) => passwordValidation(ev)}
                    className={`input ${
                      passwordError ? "input-error" : ""
                    } flex-1`}
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
          </fieldset>
          <button
            type="submit"
            className="btn"
            disabled={passwordError || emailError}
          >
            Sign in
          </button>
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
            Validating email and password ...
          </p>
        </div>
      )}
      <div className=" flex flex-col gap-5 my-8 lg:px-[1rem] ">
        {!isLoading && (
          <>
            <small className=" text-center">
              ---- Sign in using your Google account ----
            </small>
            <button
              className="btn--outline flex flex-wrap items-center justify-center gap-4"
              onClick={() => {
                googleAuth();
              }}
            >
              <img
                src={GoogleLogo}
                alt="google logo"
                className="h-[1.825rem]"
              />
              <p className="m-0">Sign in with Google</p>
            </button>
          </>
        )}
        <div className=" flex flex-wrap gap-2 justify-center">
          <p className=" m-0 font-bold text-primary">New to Lead Up?</p>
          <NavLink
            to={"/auth/signUp"}
            className="font-bold underline text-primary-light"
          >
            Create an account
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
