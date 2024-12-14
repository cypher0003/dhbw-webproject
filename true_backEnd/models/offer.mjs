import {v4 as uuid} from 'uuid';
import { offerStatus } from '../Enums/offerStatus.mjs';

export const offerModel = (title, description, customerId)=>{
    return{
        id: uuid(),
        title,
        description,
        customerId,
        documents:[],
        comments: [],
        notes: [],
        status: offerStatus.draft,
        creationDate: new Date(),
        updateDate: new Date()
    }
}