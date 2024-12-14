import { expect } from "chai";
import { customerModel } from "../models/customerModel.mjs";
import { offerModel} from "../models/offer.mjs";

describe("customer testing", () => {
    it("Should create a customer", () => {
        
        const offerModel1 = offerModel("Test Offer", "Description", "1234")
        const offerModel2 = offerModel("Test Offer", "Description", "1234")
        const customer = customerModel(
            "John",
            "Doe",
            "john.doe@example.com",
            "+123456789",
            "123 Main St"
        )

        expect(customer).to.have.property("id");
        expect(customer.firstName).to.equal("John");
        expect(customer.lastName).to.equal("Doe");
        expect(customer.email).to.equal("john.doe@example.com");
        expect(customer.phone).to.equal("+123456789");
        expect(customer.address).to.equal("123 Main St");
    })


})