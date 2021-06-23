import React ,{ useState ,useEffect} from "react";
import {firestore,timestamp} from '../../../firebase';
import { useAuth } from "../../../contexts/AuthContext";


function UpdateTutor(data,userID){
    //const { userID } = useAuth()

    let error = ''
    let newdata = ''
    
    
        //references
        const createdAt = timestamp();
        const tutors = firestore.collection('tutors').doc(userID)
        tutors.update({
            ...data,
            updatedAt:createdAt,
            
        })
        .catch((err) => {
            error = err;
            console.error("Error updating document: ", error);
        });
        
    
    return {newdata,error}

}

export default UpdateTutor;