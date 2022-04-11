const axios = require("axios");

describe("Comments", () => {
  let cookie = "";
  beforeAll(async () => {
    const signin = await axios.post("http://localhost:4000/signin", {
      email: "soli@gmail.com",
      password: "12345",
    });
    cookie = "authCookie=" + signin.data.accessToken;
  });
  it("Should create a comment", async () => {
    const response = await axios.post(
      "http://localhost:4000/comments",
      {
        content: "Wow HIMYM est la meilleure série",
        showId: "1234",
        seasonId: "2",
        episodeId: "5",
      },
      {
        headers: {
          cookie: cookie,
        },
      }
    );
    expect(response.status).toBe(200);
  });
  it("Should show all comments for a show", async () => {
    const response = await axios.get("http://localhost:4000/comments/5", {
      headers: {
        cookie: cookie,
      },
    });
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });
  it("Should delete a comment", async () => {
    const response = await axios.delete("http://localhost:4000/comments/5", {
      headers: {
        cookie: cookie,
      },
    });
    expect(response.status).toBe(200);
  });
});
