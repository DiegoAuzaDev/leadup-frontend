import { API_URL } from "../keys";

async function createVehicle(vehicle ,token, companyId){
  const response = await fetch(`${API_URL}/api/vehicle/${companyId}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(vehicle),
  });
  return response;
}

export  {
    createVehicle,
}