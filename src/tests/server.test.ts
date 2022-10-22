import "jasmine";
import supertest from "supertest";
import app from "../server";

const request = supertest(app);

describe("test endpoint response", () => {
  it("check endpoint is running", async () => {
    const query = "?filename=fjord&width=200&height=200";
    const response = await request.get(`/api` + query);
    expect(response.status).toBe(200);
  });
});
