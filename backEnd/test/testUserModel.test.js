import { expect } from "chai";
import { userModel } from "../models/userModel.mjs";
import { userRole } from "../Enums/userRole.mjs";
import { sha256 } from "js-sha256";
import { addUser } from "../Helper/user/addUser.mjs";
import { users } from "../Helper/user/addUser.mjs";

describe("UserModel Tests", () => {
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

    it("should add a user and save it", () => {
      const user1 = userModel(
        "johndoe",
        "John",
        "Doe",
        "john.doe@example.com",
        "+123456789",
        "securepassword"
      );

      const user2 = userModel(
        "janedoe",
        "Jane",
        "Doe",
        "john.doe@example.com",
        "+123456789",
        "securepassword"
      );
      user1.role = userRole.accountManager;
      user2.role = userRole.accountManager;

      addUser(user1);
      addUser(user2);

      expect(users[0].userName).to.equal("johndoe")
      expect(users[1].userName).to.equal("janedoe")
    })
});

