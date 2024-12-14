import { checkIfAM } from "../Helper/customer/checkIfAM.mjs";
import { expect } from "chai";
import { userModel } from "../models/userModel.mjs";
import { userRole } from "../Enums/userRole.mjs";
import { sha256 } from "js-sha256";

describe("CheckAddCustomer Tests", () => {
    it("should create a valid user object", () => {
      const user = userModel(
        "johndoe",
        "John",
        "Doe",
        "john.doe@example.com",
        "+123456789",
        "securepassword"
      );
  
      expect(user).to.have.property("id").that.is.a("string");
      expect(user.userName).to.equal("johndoe");
      expect(user.firstname).to.equal("John");
      expect(user.lastname).to.equal("Doe");
      expect(user.email).to.equal("john.doe@example.com");
      expect(user.phone).to.equal("+123456789");
      expect(user.password).to.equal(sha256("securepassword"))
      expect(user.role).to.equal(userRole.user);
    });

    it("should check if permitted to add customers", () =>{
      const user = userModel(
        "johndoe",
        "John",
        "Doe",
        "john.doe@example.com",
        "+123456789",
        "securepassword"
      )
      user.role = userRole.accountManager
      expect(checkIfAM(user)).to.equal(true)
    })

});