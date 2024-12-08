import chaiHttp from "chai-http";
import { describe, it } from "mocha";
import * as chai from "chai";
import { expect } from "chai";

chai.use(chaiHttp);

describe("test 1", () => {
  it("calculator", () => {
    const data = 9;
    expect(data).to.equals(9);
  });
});
