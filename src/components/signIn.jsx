import { useEffect, useState } from "react";
import LogoWhite from "../assets/LeadUpIcon.svg";
import ContainerMessage from "./containerMessage";
import GoogleLogo from "../assets/GoogleImage.webp";
import { validateEmail, validatePassword } from "../utils/validateInput";
import googleAuth from "../utils/googleAuth";
import { NavLink } from "react-router-dom";

function SignIn() {
  useEffect(() => {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-primary");
  }, []);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isInvalidAuth, setIsInvalidAuth] = useState("");

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

  const submitForm = (ev) => {
    ev.preventDefault();
    console.log(email);
    console.log(password);
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
          title={"authenticating your credentials"}
          message={"User not found"}
        />
      )}
      <form onSubmit={submitForm} className=" lg:px-[1rem] flex flex-col gap-6">
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
          <label
            htmlFor="password"
            className="text-base md:text-[1.05rem] lg:text-[1.1rem] flex flex-col"
          >
            Password *
            <input
              autoComplete="password"
              type="password"
              id="password"
              required
              value={password}
              onChange={(ev) => passwordValidation(ev)}
              className={`input ${passwordError ? "input-error" : ""}`}
              placeholder="Enter your password"
            />
          </label>
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
      <div className=" flex flex-col gap-5 my-8 lg:px-[1rem] ">
        <small className=" text-center">
          ---- Sign in using your Google account ----
        </small>
        <button
          className="btn--outline flex flex-wrap items-center justify-center gap-4"
          onClick={() => {
            googleAuth();
          }}
        >
          <img src={GoogleLogo} alt="google logo" className="h-[1.825rem]" />
          <p className="m-0">Sign in with Google</p>
        </button>
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
