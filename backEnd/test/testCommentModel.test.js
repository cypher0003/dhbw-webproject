import { expect } from "chai";
import {noteModel} from "../models/noteModel.mjs"
import { userModel } from "../models/userModel.mjs";
import { offerModel } from "../models/offer.mjs";
import { addComment } from "../Helper/comment/addComment.mjs";
import { userRole } from "../Enums/userRole.mjs";


describe("NoteModel Tests", () => {
  it("should create a valid comment object", () => {
    const user1 = userModel(
      "johndoe",
      "John",
      "Doe",
      "john.doe@example.com",
      "+123456789",
      "securepassword" 
    );
    const testOffer1 = offerModel("Test Offer1", "Description", "1234");
    const comment = noteModel("Great offer!", user1);
    expect(comment).to.have.property("id");
    expect(comment.text).to.equal("Great offer!");
    expect(comment.user.id).to.equal(comment.user.id);
    expect(comment).to.have.property("creationDate").that.is.a("date");
    expect(comment).to.have.property("updateDate").that.is.a("date");
  });

  it("should add and save a Note", () => {
    const user1 = userModel(
      "johndoe",
      "John",
      "Doe",
      "john.doe@example.com",
      "+123456789",
      "securepassword" 
    );
    user1.role = userRole.dev;
    
    const testOffer = offerModel("Test Offer", "Description", "1234");
    const comment = noteModel("Great offer!", user1);
    const comment2 = noteModel("Good offer!", user1);
    const comment3= noteModel("Bad offer!", user1);
  console.log(comment.user.role)
    addComment( comment, testOffer)
    addComment( comment2, testOffer)
    addComment( comment3, testOffer)

    console.log(testOffer.notes)
  })

 
});
