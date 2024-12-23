import { v4 as uuidv4 } from "uuid";
import { userRole } from "../Enums/userRole.mjs";
import { sha256 } from "js-sha256";



export const userModel = (
  userName,
  firstname,
  lastname,
  email,
  phone,
  password
) => {
  return {
    id: uuidv4(),
    userName,
    firstname,
    lastname,
    email,
    phone,
    //based on security standards the password will automatically be hashed => no option to see the correct password
    password: sha256(password),
    role: userRole.user,
  };
};
