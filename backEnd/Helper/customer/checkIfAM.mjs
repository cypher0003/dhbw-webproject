import { userRole } from "../../Enums/userRole.mjs";
import { userModel } from "../../models/userModel.mjs";

//AM stands for Account Manager

export const checkIfAM = (userModel) => {
    let checkVar = false;
    if (userModel.role === userRole.accountManager) {
        checkVar = true;
        return checkVar;
    } else {
        checkVar = false;
        return checkVar;
    }
}
