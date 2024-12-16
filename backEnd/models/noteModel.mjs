import { v4 } from "uuid";

export const noteModel = (text, user) => {
  return {
    id: v4(),
    text,
    creationDate: new Date(),
      updateDate: new Date(),
    
      //ÜBERARBEITEN: es soll nicht der ganze User sondern nur die USER ID übergeben werden => payload klein halten!
    user: { ...user },
  };
};
