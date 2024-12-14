
import { checkIfAM } from "../customer/checkIfAM.mjs"

export const offers = [];
export const addOffer = (user, offer) => {
if (checkIfAM(user)===false)
    {
        throw new Error("Only Account Manager are able to add Offers")
    }
    else{
        offers.push({
            ...offer,
            addedAt: new Date(),
        })
    }


   
 
}