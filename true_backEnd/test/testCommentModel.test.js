import { expect } from "chai";
import { commentModel } from "../models/commentModel.mjs";

describe("CommentModel Tests", () => {
  it("should create a valid comment object", () => {
    const comment = commentModel("Great offer!", "user123", "offer123");

    expect(comment).to.have.property("id");
    expect(comment.text).to.equal("Great offer!");
    expect(comment.userId).to.equal("user123");
    expect(comment.offerId).to.equal("offer123");
    expect(comment).to.have.property("creationDate").that.is.a("date");
    expect(comment).to.have.property("updateDate").that.is.a("date");
  });
});
