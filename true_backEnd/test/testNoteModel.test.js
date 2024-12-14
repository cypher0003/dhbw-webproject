import { expect } from "chai";
import { noteModel } from "../models/noteModel.mjs";

describe("NoteModel Tests", () => {
  it("should create a valid note object", () => {
    const note = noteModel("Internal note", "user123", "offer123");

    expect(note).to.have.property("id").that.is.a("string");
    expect(note.text).to.equal("Internal note");
    expect(note.userId).to.equal("user123");
    expect(note.offerId).to.equal("offer123");
    expect(note).to.have.property("creationDate").that.is.a("date");
    expect(note).to.have.property("updateDate").that.is.a("date");
  });
});
