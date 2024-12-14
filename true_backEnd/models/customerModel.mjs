import {v4 as uuidv4} from 'uuid';
export const customerModel = (firstName, lastName, email, phone, address) => {
    return{
        id: uuidv4(),
        firstName,
        lastName,
        email,
        phone,
        address,
        creationDate: new Date(),
        updateDate: new Date()
    };
  
};