const validateEmail = (email) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.trim() === "") {
    return "Email must be provided";
  }
  if (!pattern.test(email.trim())) {
    return "Invalid Email format";
  } else {
    return "";
  }
};

const validateAddress = (address)=>{
const addressPattern = /^[a-zA-Z0-9\s-#]+$/;

 if (address.trim() === "") {
   return "Address must be provided";
 }

 if (address.length < 8) {
   return "Address must be at least 8 characters long";
 }

 if (!addressPattern.test(address)) {
   return "Address must contain only letters,spaces, number or #";
 }

 return "";
}

const validatePassword = (password) => {
  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }
  const capLetterPattern = /[A-Z]/;
  const specialCharPattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  if (!capLetterPattern.test(password)) {
    return "Password must contain at least one capital letter";
  }

  if (!specialCharPattern.test(password)) {
    return "Password must contain at least one special character";
  }

  return "";
};


const validateName = (name) => {
  const namePattern = /^[a-zA-Z\s]+$/; // This pattern allows only letters and spaces

  if (name.trim() === "") {
    return "Name must be provided";
  }

  if (name.length < 3) {
    return "Name must be at least 3 characters long";
  }

  if (!namePattern.test(name)) {
    return "Name must contain only letters and spaces";
  }

  return "";
};

export { validateEmail, validatePassword, validateName, validateAddress };
