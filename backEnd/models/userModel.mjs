import { v4 as uuidv4 } from "uuid"
import { userRole } from "../Enums/userRole.mjs"
import {sha256} from "js-sha256"

export const userModel =(userName, firstname, lastname, email, phone, password) =>{
    return{
    id: uuidv4(),
    userName,
    firstname,
    lastname,
    email,
    phone,
    password:sha256(password),
    role: userRole.user,
    }
}

const test= userModel("johndoe",
        "John",
        "Doe",
        "john.doe@example.com",
        "+123456789",
        "securepassword")

console.log(test.password)