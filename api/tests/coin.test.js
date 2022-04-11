const axios = require("axios");

describe("Coin", () => {
  it("should return data", async () => {
    const response = await axios.get("http://localhost:4000/coins");
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it("should return data", async () => {
    const signin = await axios.post("http://localhost:4000/signin", {
      email: "soli@gmail.com",
      password: "12345",
    });
    const cookie = signin.data.accessToken;
    const response = await axios.get("http://localhost:4000/coins", {
      headers: {
        cookie: cookie,
      },
    });
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });
});
