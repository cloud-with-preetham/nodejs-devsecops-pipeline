const request = require("supertest");
const app = require("../app/server");

describe("API Test", () => {
  test("GET /api should return status OK", async () => {
    const res = await request(app).get("/api");

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("OK");
  });
});
