import { checkIfAM } from "../../backEnd/Helper/customer/checkIfAM.mjs";

export const changeRole = (user) => {
if (!checkIfAM) {
    throw new Error("You are not permitted to change user roles!")
} else {
    user.role 
}
}