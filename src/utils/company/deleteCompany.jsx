import { API_URL } from "../keys";

async function deleteCompany(companyId, token) {
  const url = `${API_URL}/${companyId}`;
  let returnResponse = null;
  try {
    let deleteCompany = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!deleteCompany.ok) {
      throw new Error("Error deleting selected company");
    }
     const response = await deleteCompany.json();
     returnResponse = response
    return returnResponse;
  } catch (err) {
    returnResponse = err;
    return returnResponse;
  }
}

export default deleteCompany;
