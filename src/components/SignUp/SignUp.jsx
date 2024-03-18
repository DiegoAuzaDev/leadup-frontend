import { NavLink } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../../assets/LeadUpBlack.png";
import { useEffect, useState } from "react";
import GoogleImg from "../../assets/Google.png";
import Patter from "../../assets/pattern.svg";
import "./signup.css";
function SignUp() {
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const urlToken = searchParams.get("token");
    console.log(urlToken);

    if (urlToken) {
      console.log("token found in url");
    }
  });

  function doGoogleAuth() {
    const redirectUrl = "http://localhost:5173/dashboard";
    // const baseUrl = `http://localhost:3004/api/`;
    const baseUrl = `http://localhost:3004/auth/google?redirect_url=${redirectUrl}`;
    location.href = baseUrl;
  }

  return (
    <div className=" flex flex-row h-[100vh]">
      <div className="pt-12 md:mt-0 container-main pb-8 overflow-scroll">

        <div className=" flex flex-col md:items-end">
          <header className="flex mb-8 pt-8 md:w-96">
            <NavLink to="localhost:" className="">
              <img src={Logo} alt="Leadup logo" className="h-12 object-fill" />
            </NavLink>
          </header>
        </div>

        <main className=" flex flex-col md:items-end">
          <div>
            <h2 className="  md:w-96 font-medium italic text-sky-900  text-[32px] w-96">
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
            <NavLink
              className="btn--outline flex justify-center gap-2"
              onClick={doGoogleAuth}
            >
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
                First Name
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
                Last name
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
              <legend className=" font-semibold text-gray-800">Password</legend>
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
              {/* Need to complete local Auth */}
              <NavLink className="btn">Sign up</NavLink>
              <NavLink className="btn--outline bg-gray-200">Log in</NavLink>
            </div>
          </form>
        </main>
      </div>
      <div
        className="md:h-auto md:static  h-4 md:inline-block  md:w-3/5 md:bg-sky-900"
        style={{ backgroundImage: `url(${Patter})` }}
      ></div>
    </div>
  );
}
export default SignUp;
