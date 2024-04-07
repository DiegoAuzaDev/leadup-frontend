async function localSingup(baseUrl, newLocalUser) {
  try {
    const loginResponse = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocalUser),
    });

    if (loginResponse.status == 500) {
      throw new Error("User not found");
    }
    if (loginResponse.status == 401) {
      throw new Error("Invalid Credentials");
    }
    if (loginResponse.url) {
      return loginResponse.url;
    }
  } catch (err) {
    return err;
  }
}

export default localSingup;
