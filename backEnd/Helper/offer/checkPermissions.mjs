import { userRole } from "../../Enums/userRole.mjs";
import { offerStatus } from "../../Enums/offerStatus.mjs";

//checks permissions if user is a Account Manager or a Dev
export const checkPermission = (user) => {
  let isUserPermitted = false;
  if (user.role === userRole.accountManager || user.role === userRole.dev) {
    isUserPermitted = true;
  }
  if (isUserPermitted === false) {
    return false;
  } else {
    return true;
  }
};
