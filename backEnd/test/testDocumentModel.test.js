import { expect } from "chai";
import { documentModel } from "../models/documentModel.mjs";

describe("DocumentModel Tests", () => {
  it("should create a valid document object", () => {
    const document = documentModel("Document 1", "/path/to/doc", "offer123");

    expect(document).to.have.property("id").that.is.a("string");
    expect(document.name).to.equal("Document 1");
    expect(document.path).to.equal("/path/to/doc");
    expect(document.offerId).to.equal("offer123");
    expect(document).to.have.property("uploadDate").that.is.a("date");
    expect(document).to.have.property("updateDate").that.is.a("date");
  });
});
