import { v4 } from "uuid";

export const noteModel = (text, userId, offerId) => {
    return{
        id: v4(),
        text,
        userId,
        offerId,
        creationDate: new Date(),
        updateDate: new Date()

    }
}