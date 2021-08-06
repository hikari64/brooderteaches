import React ,{ useState ,useEffect} from "react";
import {firestore,timestamp} from '../../../firebase';
import AddFile from "./useAddFile";
import { useAuth } from "../../../contexts/TutorContext";
import {storage} from '../../../firebase';


function useAddTutorVerificationId(data,userID){

    let error = ''
    let progress = 0
  
    //const {progress,newUrl} = AddFile(,'images');
    const tutors = firestore.collection('tutors').doc(userID)
    
        //references
        const storageRef = storage.ref('');

        storageRef.put(data.verificationID).on('state_changed',(snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            progress = percentage;
        }, (err) => {
            error =err;
        }, async () =>{
            const url = await storageRef.getDownloadURL();
            
            tutors.update({

                verificationID:url,
                state:3
                
            }).then((docRef) => {
                
                
                console.log("verification Id Added completely ");
            })
            .catch((err) => {
                error = err;
                console.error("Error adding document: ", error);
            });

        })
        
        
    
    return {progress,error}

}

export default useAddTutorVerificationId;