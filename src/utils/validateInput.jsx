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

export { validateEmail, validatePassword };
