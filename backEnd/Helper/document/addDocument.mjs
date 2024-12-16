import { checkPermission } from "../offer/checkPermissions.mjs";
import { v4 } from "uuid";

//adds documents to offers based on checkPermission validation
export const addDocument = (offer, document, user) => {
  if (!checkPermission(user, offer)) {
    throw new Error("No Permission for adding a document");
  }

  if (!document || !document.name || !document.path) {
    throw new Error("Invalid document. A valid name and path are required.");
  }

  offer.documents.push({
    ...document,
    addedDate: new Date(),
  });

  offer.updateDate = new Date();
};
