import { offerStatus } from "../../Enums/offerStatus.mjs";
import { checkIfAM } from "../customer/checkIfAM.mjs";
import { checkPermission } from "./checkPermissions.mjs";
import { userRole } from "../../Enums/userRole.mjs";



export let IceOrActive;

export const setIceOrActive = (value) =>
{
    IceOrActive = value;
}

export const getIceOrActive = () => 
{
    return IceOrActive
}

export const changeStatus = (user, offer) => {
    if (!offer || !offer.status) {
        throw new Error("Invalid offer object provided.");
    }

    switch (offer.status) {
        case offerStatus.draft:
           
            if (!checkIfAM(user)) {
                throw new Error(`You can't change the status in the DRAFT stage. You are: ${user.role}`);;
            }
            offer.status = offerStatus.inProgress;
            break;

        case offerStatus.inProgress:
            
            if (!checkPermission(user)) {
                throw new Error(`You can't change the status in the INPROGRESS stage. You are: ${user.role}`);
            }

            
            if (IceOrActive === offerStatus.active) {
                offer.status = offerStatus.active;
            } else if (IceOrActive === offerStatus.ice) {
                offer.status = offerStatus.ice;
            } else {
                throw new Error("Invalid value for onIceOrActive. Must be 'active' or 'ice'.");
            }
            break;

        case offerStatus.ice:
            throw new Error(`You can't change the status in the ICE stage. You are: ${user.role}`);
            break;

        case offerStatus.active:
            throw new Error(`You can't change the status in the ACTIVE stage. You are: ${user.role}`);
            break

        default:
            throw new Error(`Unhandled status: ${offer.status}`);
    }
}; // eventuell undo Logik einbauen => ice oder active rückgängig machen



