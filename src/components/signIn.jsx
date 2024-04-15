import { useState } from "react";
import LogoWhite from "../assets/LeadUpIcon.svg";
import ContainerMessage from "./containerMessage";
import GoogleLogo from "../assets/GoogleImage.webp"
function SignIn() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isInvalidAuth, setIsInvalidAuth] = useState("");

  return (
    <div className=" bg-white py-7 px-2 ld:px-[1.5rem] grid col-span-12  col-start-1 md:col-start-2 md:col-span-10 lg:col-start-4 lg:col-span-6 gap-5 mb-[5rem] fadeInBottom rounded-custom">
      <div className=" flex justify-center">
        <img src={LogoWhite} className=" h-[3.124rem]" alt="Lead Up Logo" />
      </div>
      <div>
        <p className=" text-center m-0 font-bold text-primary-light text-[1.266rem] md:text-[1.44rem] lg:text-[1.563rem]">
          Welcome back, ready to sync your team
        </p>
        <h1 className="text-center m-0 font-bold">Sign in to Lead Up</h1>
      </div>
      {isInvalidAuth && (
        <ContainerMessage
          title={"authenticating your credentials"}
          message={"User not found"}
        />
      )}
      <form action="" className=" lg:px-[1rem] flex flex-col gap-6">
        <fieldset className=" flex flex-col gap-2">
          <label
            htmlFor=""
            className="text-base md:text-[1.05rem] lg:text-[1.1rem]"
          >
            Email address *
          </label>
          <input
            type="email"
            className={`input ${emailError ? "input-error" : ""}`}
            placeholder="email@example.com"
            value={email}
          />
          <small className=" text-red">{emailError}</small>
        </fieldset>
        <fieldset className=" flex flex-col gap-2">
          <label
            htmlFor=""
            value={password}
            className="text-base md:text-[1.05rem] lg:text-[1.1rem]"
          >
            Password *
          </label>
          <input
            type="password"
            className={`input ${passwordError ? "input-error" : ""}`}
            placeholder="password"
          />
          <small className=" text-red">{passwordError}</small>
        </fieldset>
      </form>
      <div className=" flex flex-col gap-5 my-8">
        <button className="btn">Sing in</button>
        <button className="btn--outline flex flex-wrap items-center justify-center gap-4">
          <img src={GoogleLogo} alt="google logo" className="h-[1.825rem]" />
          <p className="m-0">Sing in with Google</p>
        </button>
      </div>
    </div>
  );
}
export default SignIn;
