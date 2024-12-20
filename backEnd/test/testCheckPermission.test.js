import { expect } from "chai";
import { checkPermission } from "../Helper/offer/checkPermissions.mjs";
import { userRole } from "../Enums/userRole.mjs";
import { offerStatus } from "../Enums/offerStatus.mjs";

describe("checkPermission", () => {
  it("should allow a Developer to modify an offer in Draft status", () => {
    const user = { role: userRole.dev };
    const result = checkPermission(user);
    expect(result).to.be.true;
  });

  it("should allow an Account Manager to modify an offer in Draft status", () => {
    const user = { role: userRole.accountManager };
    const offer = { status: offerStatus.draft };

    const result = checkPermission(user, offer);
    expect(result).to.be.true;
  });

  it("should deny a Viewer from modifying an offer in Draft status", () => {
    const user = { role: userRole.viewer };
    

    const result = checkPermission(user);
    expect(result).to.be.false;
  });

  it("should deny a Viewer from modifying an offer in Active status", () => {
    const user = { role: userRole.viewer };
    

    const result = checkPermission(user);
    expect(result).to.be.false;
  });
});
