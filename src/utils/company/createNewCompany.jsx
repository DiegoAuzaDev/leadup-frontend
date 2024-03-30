/* eslint-disable no-unused-vars */

import { API_URL } from "../keys";

async function createNewCompany(companyObj, token) {
  const url = API_URL;
  let returnResponse = null;
  try {
    const createNewCompany = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(companyObj),
    });
    if(!createNewCompany.ok) {
      throw new Error("Error creating new company");
    }
    const response = await createNewCompany.json();
    returnResponse = response
    return returnResponse
  } catch (error) {
    returnResponse = error;
    return returnResponse;
  }
}

export default createNewCompany;
