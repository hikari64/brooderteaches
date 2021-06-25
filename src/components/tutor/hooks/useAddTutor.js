import React ,{ useState ,useEffect} from "react";
import {firestore,timestamp} from '../../../firebase';
import { useAuth } from "../../../contexts/AuthContext";


function AddTutor(data,userID){
    //const { userID } = useAuth()

    let error = ''
    let newdata = ''
    
    
        //references
        const createdAt = timestamp();
        const tutors = firestore.collection('tutors').doc(userID)
        tutors.update({
            ...data,
            verified:false,
            state:2,
            avatar:null,
            courses:[],
            createdAt
        })
        .catch((err) => {
            error = err;
            console.error("Error adding tutor: ", error);
        });
        
    
    return {newdata,error}

}

export default AddTutor;