const axios = require("axios");

describe("Authentication", () => {
  it("should return a token", async () => {
    const response = await axios.post("http://localhost:4000/signin", {
      email: "soli@gmail.com",
      password: "12345",
    });
    expect(response.status).toBe(200);
    expect(response.data.accessToken).toBeDefined();
  });
});
