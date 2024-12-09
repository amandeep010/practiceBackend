import chaiHttp from "chai-http";
import { describe, it } from "mocha";
import request from "supertest";
import * as chai from "chai";
import { expect } from "chai";
import app from "../src/app";

chai.use(chaiHttp);

describe("test 1", () => {
  describe("firstGet", () => {
    it("add api", () => {
      const res: any = request(app).get("/route/child/add").send();
      expect(res.status).to.equals(200);
    });
  });
});
