import { API_URL} from "./keys.jsx"

const localSignup = async (email, password) => {
  try {
    const body = {
      
    }
    const localSignUpRequest = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      mode: "cors",
    });
  } catch (err) {
    console.log("error");
  }
};
const localSignin = (name, email, password) => {};

export { localSignup, localSignin };
