import * as supertest from "supertest";
import { default as app } from "../src/server";
const request = supertest("localhost:3000");

describe("GET /task/read", () => {
  it("should return 200 OK", () => {
    return request.get("/task/read").then((response) => {
      expect(response.status).toBe(200);
    });
  });
});

describe("POST /task/add", () => {
  it("should return 200 OK", () => {
    return request.post("/task/add").then((response) => {
      expect(response.status).toBe(200);
    });
  });
});

describe("PUT /task/update", () => {
  it("should return 200 OK", () => {
    return request.put("/task/update").then((response) => {
      expect(response.status).toBe(200);
    });
  });
});

describe("DELETE /task/remove", () => {
  it("should return 200 OK", () => {
    return request.delete("/task/remove").then((response) => {
      expect(response.status).toBe(200);
    });
  });
});
