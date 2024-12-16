import { userRole } from "../../Enums/userRole.mjs";
import { userModel } from "../../models/userModel.mjs";

//AM stands for Account Manager
//Checks if a given User is an Account Manager
export const checkIfAM = (user) => {
  let checkVar = false;
  if (user.role === userRole.accountManager) {
    checkVar = true;
    return checkVar;
  } else {
    checkVar = false;
    return checkVar;
  }
};
