import {expect} from 'chai';
import { offerModel } from '../models/offer.mjs';

describe("offer testing", ()=>{
    it ("should create a correct offer", () => {
        const testOffer = offerModel("Test Offer", "Description", "1234");

        expect(testOffer).to.have.property('id');
        expect(testOffer.title).to.equal("Test Offer");
        expect(testOffer.description).to.equal("Description");
        expect(testOffer.customerId).to.equal("1234");
        expect(testOffer.status).to.equal("Draft")
    })
})