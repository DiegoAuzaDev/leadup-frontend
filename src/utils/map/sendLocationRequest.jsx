const sendLocationRequest = async (url) => {
  let returnResponse = null;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    if (data.error_message) {
      throw new Error("Invalid request");
    }
    returnResponse = data.results[1].formatted_address;
  } catch (error) {
    returnResponse = new Error(error.message);
  }
  return returnResponse;
};


export default sendLocationRequest;