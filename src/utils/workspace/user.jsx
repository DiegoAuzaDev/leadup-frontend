import { API_URL } from "../keys";

async function requestUserData(token) {
  const userResponse = await fetch(`${API_URL}/api`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return userResponse;
}

async function createCompanyNewUser(company, token) {
  const response = await fetch(`${API_URL}/api`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body : JSON.stringify(company)
  });
  return response;
}
export { requestUserData, createCompanyNewUser };