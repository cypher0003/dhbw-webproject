import { v4 } from "uuid";

export const noteModel = (text, user) => {
    return{
        id: v4(),
        text,
        creationDate: new Date(),
        updateDate: new Date(),
        user: {...user},
        


    }
}