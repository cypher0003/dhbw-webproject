import { v4 } from "uuid";

export const documentModel = (name, path, offerId) => {
    return{
        id: v4(),
        name,
        path,
        offerId,
        uploadDate: new Date(),
        updateDate: new Date(),
    };
};