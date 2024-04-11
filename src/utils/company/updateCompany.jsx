/* eslint-disable no-unused-vars */
import { API_URL } from "../keys";
async function updateCompanyData(companyId, updatedCompaby, token ) {
  const url = `${API_URL}/${companyId}`;
  let returnResponse = null;
  try {
    let updateCompany = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedCompaby),
    });
    if (!updateCompany.ok) {
      throw new Error("Error updating a company");
    }
    const response = await updateCompany.json();
    returnResponse = response;
    return returnResponse;
  } catch (err) {
    returnResponse = err.message;
    return returnResponse;
  }
}



export default updateCompanyData;