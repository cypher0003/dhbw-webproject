import { expect } from "chai";
import { customerModel } from "../models/customerModel.mjs";
import { offerModel} from "../models/offer.mjs";
import { userModel } from "../models/userModel.mjs";
import { addCustomer, customers } from "../Helper/customer/addCustomer.mjs";
import { userRole } from "../Enums/userRole.mjs";
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

    it("should add and save a customer", () =>{
            const user1 = userModel(
                "johndoe",
                "John",
                "Doe",
                "john.doe@example.com",
                "+123456789",
                "securepassword"
              );

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
    
              user1.role = userRole.accountManager;

              addCustomer(user1,customer1)
              addCustomer(user1,customer2)

              console.log(customers[0].id);
              console.log(customers[1].id);

              expect(customers[0].firstName).to.equal("John");
              expect(customers[1].firstName).to.equal("Jane");
    })


})