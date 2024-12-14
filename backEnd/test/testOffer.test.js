import {expect} from 'chai';
import { offerModel } from '../models/offer.mjs';
import { offers } from '../Helper/offer/addOffer.mjs';
import { addOffer } from '../Helper/offer/addOffer.mjs';
import { userModel } from '../models/userModel.mjs';
import { userRole } from '../Enums/userRole.mjs';

describe("offer testing", ()=>{
    it ("should create a correct offer", () => {
        const testOffer = offerModel("Test Offer", "Description", "1234");

        expect(testOffer).to.have.property('id');
        expect(testOffer.title).to.equal("Test Offer");
        expect(testOffer.description).to.equal("Description");
        expect(testOffer.customerId).to.equal("1234");
        expect(testOffer.status).to.equal("Draft")
    })

    it("should add and save an offer", ()=>{
        const testOffer1 = offerModel("Test Offer1", "Description", "1234");
        const testOffer2 = offerModel("Test Offer2", "Description", "1234");
        const user1 = userModel(
            "johndoe",
            "John",
            "Doe",
            "john.doe@example.com",
            "+123456789",
            "securepassword"
          );

          user1.role = userRole.accountManager;
          console.log(user1.role)

        addOffer(user1, testOffer1);
        addOffer(user1, testOffer2)

        expect(offers[0].title).to.equal("Test Offer1");
        expect(offers[1].title).to.equal("Test Offer2");


    })
})