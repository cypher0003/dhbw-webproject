import { userRole } from "../../Enums/userRole.mjs";
import { offerStatus } from "../../Enums/offerStatus.mjs";

//checks permissions if user is a Account Manager or a Dev
export const checkPermission = (user, offer) => {
  let isUserPermitted = false;
  let isOfferModifyable = false;

  if (user.role === userRole.accountManager || user.role === userRole.dev) {
    isUserPermitted = true;
  }

  if (offer.status === offerStatus.draft) {
    isOfferModifyable = true;
  }

  if (isUserPermitted === false || isOfferModifyable === false) {
    return false;
  } else {
    return true;
  }
};
