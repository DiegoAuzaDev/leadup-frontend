import { NavLink } from "react-router-dom";
import Logo from "../../assets/LeadUpBlack.png";
import Pattern from "../../assets/pattern.svg";
import GoogleImg from "../../assets/Google.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import localLogin from "../../utils/localAuth/login";
function doGoogleAuth() {
  const redirectUrl = "http://localhost:5173/workspace/dashboard";
  const baseUrl = `http://localhost:3004/auth/google?redirect_url=${redirectUrl}`;
  location.href = baseUrl;
}
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [requestError, setRequestError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return "Invalid email format";
    }
    return;
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };
  const validatePassword = (password) => {
    if (!password.trim()) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return;
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const redirectUrl = "http://localhost:5173/workspace/dashboard";
    const baseUrl = `http://localhost:3004/auth/login?redirect_url=${redirectUrl}`;
    const newLocalUser = {
      password: password,
      email: email,
    };
    const localLogInResponse = await localLogin(baseUrl, newLocalUser);
    if (typeof localLogInResponse == "string") {
      setIsLoading(false);
      location.href = localLogInResponse;
    } else {
      setIsLoading(false);
      setRequestError(localLogInResponse);
    }
  };
  return (
    <div className=" flex flex-row h-[100vh]">
      <div className="pt-12 md:mt-0 container-main pb-8 overflow-scroll">
        <div className=" flex flex-col md:items-end">
          <header className="flex mb-8 pt-8 md:w-96">
            <NavLink to="/" className="">
              <img src={Logo} alt="Leadup logo" className="h-12 object-fill" />
            </NavLink>
          </header>
        </div>

        <main className=" flex flex-col md:items-end">
          <div>
            <h2 className="  md:w-96 font-medium italic text-sky-900  text-[32px] w-96">
              Log in with your credentials
            </h2>
            <p className=" font-bold text-[18px]">
              Do not you have an account?
              <NavLink to="/signup" className="underline text-sky-700 px-1">
                Sign up now
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
          <form
            onSubmit={handleSubmit}
            className=" w-full md:w-96 flex flex-col"
          >
            <div className=" my-5 flex emial-password">
              <span className=" text-gray-400 text-sm">Email and password</span>
            </div>
            {requestError && (
              <div className=" bg-red-400 rounded-md p-4   text-sky-950">
                <p className="m-0">{`There was and error creating a new user`}</p>
                <p className="m-0">
                  {"Error messsage - " + requestError.message}
                </p>
                <NavLink to={"/signup"} className=" underline font-medium">
                  Sign up here
                </NavLink>
              </div>
            )}
            <fieldset className="mt-4 mb-6">
              <legend className=" font-semibold text-gray-800">
                Email Address *
              </legend>
              <label className=" flex flex-col gap-2">
                <input
                  required
                  className={`border-gray-400 border-2 rounded-md leading-8 px-2 ${
                    emailError && "focus-visible:outline-red-600"
                  }`}
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <small className=" text-red-500">{emailError}</small>
                )}
              </label>
            </fieldset>
            <fieldset className="mt-4 mb-6">
              <legend className=" font-semibold text-gray-800">
                Password *
              </legend>
              <label className=" flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <input
                    required
                    autoComplete="off"
                    className={`border-gray-400 border-2 rounded-md leading-8 px-2 flex-1 ${
                      passwordError && "focus-visible:outline-red-600"
                    }`}
                    type={passwordType}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="px-2"
                    onClick={() => {
                      if (passwordType == "password") {
                        setPasswordType("text");
                      } else {
                        setPasswordType("password");
                      }
                    }}
                  >
                    <FontAwesomeIcon
                      icon={passwordType === "password" ? faEye : faEyeSlash}
                    />
                  </button>
                </div>
                {passwordError && (
                  <small className=" text-red-500">{passwordError}</small>
                )}
              </label>
            </fieldset>
            
            <div className=" flex flex-col gap-3 mt-6">
              <button
                className="btn   bg-sky-500 "
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading ..." : "Log in"}
              </button>
              <NavLink to={"/signup"} className="btn--outline bg-gray-200">
                Sign up
              </NavLink>
            </div>
          </form>
        </main>
      </div>
      <div
        className="md:h-auto md:static  h-4 md:inline-block  md:w-3/5 md:bg-sky-900"
        style={{ backgroundImage: `url(${Pattern})` }}
      ></div>
    </div>
  );
}
export default LogIn;
