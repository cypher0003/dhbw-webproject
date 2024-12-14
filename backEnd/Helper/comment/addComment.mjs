import { v4 } from "uuid";
import { checkPermission } from "../offer/checkPermissions.mjs";

export const addComment = (offer, commentText, user) => {
    if (!checkPermission(user, offer))
    {
        throw new Error("Not permitted")
    }

    if (!commentText || typeof commentText !== "string" || commentText.trim() === "") {
        throw new Error("Comment must be a valid non-empty string.");
      }

      offer.comments.push({
        text: commentText,
        userId: user.id,
        date: new Date(),
      });
    
      offer.updateDate = new Date();
    };
