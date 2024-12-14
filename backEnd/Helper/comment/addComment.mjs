import { v4 } from "uuid";
import { checkPermission } from "../offer/checkPermissions.mjs";
import { userModel } from "../../models/userModel.mjs";
import { noteModel } from "../../models/noteModel.mjs";
import { offerModel } from "../../models/offer.mjs";
import { userRole } from "../../Enums/userRole.mjs";

export const addComment = (note,offer) => {
  console.log(note.user.role)
    if (!checkPermission(note.user, offer))
    {
        throw new Error("Not permitted")
    }

    if (!note || typeof note !== "object" ) {
        throw new Error(typeof note);
      }

      offer.notes.push({
        ...note,
        userId: note.user.id,
        date: new Date(),
      });
    
      offer.updateDate = new Date();
    };
 const user1 = userModel(
      "johndoe",
      "John",
      "Doe",
      "john.doe@example.com",
      "+123456789",
      "securepassword" 
    );
    user1.role = userRole.dev;
    
    const testOffer = offerModel("Test Offer", "Description", "1234");
    const comment = noteModel("Great offer!", user1);
    addComment(comment, testOffer)