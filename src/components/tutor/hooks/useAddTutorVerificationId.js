import React ,{ useState ,useEffect} from "react";
import {firestore,timestamp} from '../../../firebase';
import AddFile from "./useAddFile";
import { useAuth } from "../../../contexts/AuthContext";


function useAddTutorVerificationId(data,userID){

    let error = ''
  
    const {progress,newUrl,} =AddFile(data.verificationID,'images');
    
        //references
        const createdAt = timestamp();
        const tutors = firestore.collection('tutors').doc(userID)
        tutors.update({
            
            verificationID:newUrl,
            state:3
            
        }).then((docRef) => {
            
            
            console.log("Image added completely ");
        })
        .catch((err) => {
            error = err;
            console.error("Error adding document: ", error);
        });
        
    
    return {progress,error}

}

export default useAddTutorVerificationId;