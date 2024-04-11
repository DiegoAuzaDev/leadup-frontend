import { NavLink } from "react-router-dom";
import Logo from "../../assets/LeadUpBlack.png";
import GoogleImg from "../../assets/Google.png";
import Pattern from "../../assets/pattern.svg";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import "./signup.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import localSingup from "../../utils/localAuth/signup";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [requestError, setRequestError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [image, setImage] = useState("");

  const handleInputChange = async (ev) => {
    const file = ev.target.files[0];
    const base64 = await convertFileToBase64(file);
    console.log(base64)
    setImage(base64)
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (err) => {
        reject(err);
      };
    });
  };

  const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    } else if (name.length < 2) {
      return "Name must contain at least 2 characters";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return "Invalid email format";
    }
    return;
  };

  const validatePassword = (password) => {
    if (!password.trim()) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return;
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(validateName(value));
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };
  const handleSubmit = async (e) => {
    console.log("getting credential")
    setIsLoading(true)
    e.preventDefault();
    const redirectUrl = "http://localhost:5173/workspace/dashboard";
    const baseUrl = `http://localhost:3004/auth/signup?redirect_url=${redirectUrl}`;
    const newLocalUser = {
      name: name,
      password: password,
      email: email,
      photo: image
    };
    const localSingupResponse = await localSingup(baseUrl, newLocalUser)
    if( typeof localSingupResponse == "string"){
      setIsLoading(false)
      location.href = localSingupResponse
    } else {
      setIsLoading(false)
      setRequestError(localSingupResponse);
    }
  };

  function doGoogleAuth() {
    const redirectUrl = "http://localhost:5173/workspace/dashboard";
    const baseUrl = `http://localhost:3004/auth/google?redirect_url=${redirectUrl}`;
    location.href = baseUrl;
  }

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
                <NavLink to={"/login"} className=" underline font-medium">
                  Log in now
                </NavLink>
              </div>
            )}
            <fieldset className="mt-4 mb-6">
              <legend className=" font-semibold text-gray-800">
                Email Address *
              </legend>
              <label className=" flex flex-col gap-2">
                <small className=" text-gray-600">
                  We recommen using your work email
                </small>
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
              <legend className=" font-semibold text-gray-800">Name *</legend>
              <label className=" flex flex-col gap-2">
                <input
                  required
                  autoComplete="given-name"
                  className={`border-gray-400 border-2 rounded-md leading-8 px-2 ${
                    nameError && "focus-visible:outline-red-600"
                  }`}
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
                {nameError && (
                  <small className=" text-red-500">{nameError}</small>
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

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 overflow-hidden"
              >
                {!image && (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                )}
                {image && (
                  <img src={image} alt="User image" className=" h-[inherit]" />
                )}

                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className=" flex flex-col gap-3 mt-6">
              <button
                className="btn   bg-sky-500 "
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading ..." : "Sign up"}
              </button>
              <NavLink to={"/login"} className="btn--outline bg-gray-200">
                Log in
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
export default SignUp;