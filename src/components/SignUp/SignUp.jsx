import { NavLink } from "react-router-dom";
import Logo from "../../assets/LeadUpBlack.png";
import { useState } from "react";
import GoogleImg from "../../assets/Google.png"
import Patter from "../../assets/pattern.svg"
import "./signup.css"
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className=" flex flex-row">
      <div className="container-main pb-8">
        <div className=" flex flex-col md:items-end">
          <header className="flex mb-8 pt-8 md:w-96">
            <NavLink to="/" className="">
              <img src={Logo} alt="Leadup logo" className="h-12 object-fill" />
            </NavLink>
          </header>
        </div>

        <main className=" flex flex-col md:items-end">
          <div>
            <h2 className=" font-medium italic text-sky-900  text-[32px] w-96">
              Create your account
            </h2>
            <p className=" font-bold text-[18px]">
              Have an account?
              <NavLink to="/login" className="underline text-sky-700 px-1">
                Log in now
              </NavLink>
            </p>
          </div>

          <div className="md:w-96">
            <NavLink className="btn--outline flex justify-center gap-2">
              <img src={GoogleImg} className=" h-8" alt="Google logo" />
              <small className="my-auto">Google</small>
            </NavLink>
          </div>
          <form action="" className=" w-full md:w-96 flex flex-col">
            <div className=" my-5 flex emial-password">
              <span className=" text-gray-400 text-sm">Email and password</span>
            </div>
            <fieldset className="mt-4 mb-6">
              <legend className=" font-semibold text-gray-800">
                Email Address
              </legend>
              <label className=" flex flex-col gap-2">
                <small className=" text-gray-600">
                  We recommend using your work email
                </small>
                <input
                  className=" border-gray-400 border-2 rounded-md leading-8 px-2"
                  type="text"
                  value={email}
                  onChange={(value) => {
                    setEmail(value.target.value);
                  }}
                />
                <small className=" text-red-500">
                  Email Address must not be empty
                </small>
              </label>
            </fieldset>
            <fieldset className="mt-4 mb-6">
              <legend className=" font-semibold text-gray-800">
                Email Address
              </legend>
              <label className=" flex flex-col gap-2">
                <small className=" text-gray-600">
                  We recommend using your work email
                </small>
                <input
                  className=" border-gray-400 border-2 rounded-md leading-8 px-2"
                  type="text"
                  value={email}
                  onChange={(value) => {
                    setEmail(value.target.value);
                  }}
                />
                <small className=" text-red-500">
                  Email Address must not be empty
                </small>
              </label>
            </fieldset>
            <fieldset className="mt-4 mb-6">
              <legend className=" font-semibold text-gray-800">
                Email Address
              </legend>
              <label className=" flex flex-col gap-2">
                <small className=" text-gray-600">
                  We recommend using your work email
                </small>
                <input
                  className=" border-gray-400 border-2 rounded-md leading-8 px-2"
                  type="text"
                  value={email}
                  onChange={(value) => {
                    setEmail(value.target.value);
                  }}
                />
                <small className=" text-red-500">
                  Email Address must not be empty
                </small>
              </label>
            </fieldset>
            <fieldset className="mt-4 mb-6">
              <legend className=" font-semibold text-gray-800">
                Email Address
              </legend>
              <label className=" flex flex-col gap-2">
                <small className=" text-gray-600">
                  We recommend using your work email
                </small>
                <input
                  className=" border-gray-400 border-2 rounded-md leading-8 px-2"
                  type="text"
                  value={email}
                  onChange={(value) => {
                    setEmail(value.target.value);
                  }}
                />
                <small className=" text-red-500">
                  Email Address must not be empty
                </small>
              </label>
            </fieldset>
            <div className=" flex flex-col gap-3 mt-6">
              <button className="btn">Sign up</button>
              <button className="btn--outline bg-gray-200">Log in</button>
            </div>
          </form>
        </main>
      </div>
      <div
        className=" hidden md:inline-block h-[100vh] w-3/5 md:bg-sky-900"
        style={{ backgroundImage: `url(${Patter})`, height : "auto" }}
      ></div>
    </div>
  );
}
export default SignUp;

