import { customerModel } from "../../models/customerModel.mjs";

import { checkIfAM } from "./checkIfAM.mjs";

export const customers = [];

export const addCustomer = (user, customer) => {
if(checkIfAM(user) === false)
{
    throw new Error("not permitted to add a customer")
}

else{
    customers.push({
        ...customer,
        addedAt: new Date(),
    })
}
}