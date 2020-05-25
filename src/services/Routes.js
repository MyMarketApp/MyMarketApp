// const URI = "http://localhost:8000";
const URI = "https://mymarketappbackend.azurewebsites.net";
const postRequestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};
const gestRequestOptions = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

export default {
  async allStores(email, password) {
    try {
      let response = await fetch(URI + "/api/Store/all", gestRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
  async getUser(email, password) {
    try {
      postRequestOptions.body = JSON.stringify({ email, password });
      let response = await fetch(URI + "/api/User/get", postRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
  async addUser(email, password, name, lastName, phone) {
    try {
      postRequestOptions.body = JSON.stringify({
        email,
        password,
        name,
        lastName,
        phone,
      });
      let response = await fetch(URI + "/api/User/add", postRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
