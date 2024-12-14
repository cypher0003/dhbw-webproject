import { expect } from "chai";
import { allocateOffer } from "../Helper/offer/allocateOffer.mjs";
import { customerModel } from "../models/customerModel.mjs";
import { offerModel } from "../models/offer.mjs";


describe("checks allocateOffer functionality", () => {
  it("should allocate offer to a customer", () => {
    const testOffer1 = offerModel("Test Offer1", "Description", "1234");
    const testOffer2 = offerModel("Test Offer2", "Description", "1234");
    const testOffer3 = offerModel("Test Offer3", "Description", "1234");

    const customer1 = customerModel(
        "John",
        "Doe",
        "john.doe@example.com",
        "+123456789",
        "123 Main St"
    )

    const customer2 = customerModel(
        "Jane",
        "Doe",
        "jane.doe@example.com",
        "+123456789",
        "123 Main St"
    )

    allocateOffer(customer1, testOffer3)
    allocateOffer(customer1, testOffer1)
    allocateOffer(customer2, testOffer2)


    expect(customer1.allocatedOffers[0].title).to.equal("Test Offer3")
    expect(customer1.allocatedOffers[1].title).to.equal("Test Offer1")
    expect(customer2.allocatedOffers[0].title).to.equal("Test Offer2")

  });
});