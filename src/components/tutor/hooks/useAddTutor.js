import React ,{ useState ,useEffect} from "react";
import {firestore,timestamp} from '../../../firebase';
import AddFile from "./useAddFile";


function AddTutor(data){
    let error = ''
    let newdata = ''
    
    const {newUrl,} =AddFile(data.verificationID);
    
        //references
        const createdAt = timestamp();
        const tutors = firestore.collection('tutors')
        tutors.add({
            firstName:data.firstName,
            lastName:data.lastName,
            otherNames:data.otherNames,
            dateOfBirth:data.dateOfBirth,
            address:data.address,
            contact:data.address,
            email:data.email,
            verificationID:newUrl,
            verified:false,
            avatar:null,
            createdAt
        }).then((docRef) => {
            newdata = docRef;
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((err) => {
            error = err
            console.error("Error adding document: ", error);
        });
        
    

    return {newdata,error}

}

export default AddTutor;