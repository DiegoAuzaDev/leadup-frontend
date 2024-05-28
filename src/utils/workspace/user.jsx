import { API_URL } from "../keys";

async function requestuserData(token) {
  const userResponse = await fetch(`${API_URL}/api`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
    },
  });
  return userResponse
}

export { requestuserData}