async function localSingup(baseUrl, newLocalUser){

    try {
      const createResponse = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLocalUser),
      });
      
      if (createResponse.status == 401) {
        throw new Error("Email is already taken");
      }
      if (createResponse.url) {
        return createResponse.url;
      }
    } catch (err) {
        return err
    }
}

export default localSingup;