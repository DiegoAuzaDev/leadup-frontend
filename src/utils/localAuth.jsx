import { API_URL, DASHBOARD_URL } from "./keys.jsx";

const localSignup = async (name, email, password) => {
  const reqBody = {
    name: name,
    email: email,
    password: password,
  };
  const localSignUpRequest = await fetch(
    `${API_URL}/auth/signup?redirect_url=${DASHBOARD_URL}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }
  );
  return localSignUpRequest;
};
const localSignin = async (email, password) => {
  const reqBody = {
    "email": email,
    "password": password,
  };
   const localSignInRequest = await fetch(
     `${API_URL}/auth/login?redirect_url=${DASHBOARD_URL}`,
     {
       method: "POST",
       mode: "cors",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(reqBody),
     }
   );
   return localSignInRequest;
};

export { localSignup, localSignin };
