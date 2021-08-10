import React  from "react";
import {firestore,timestamp} from '../../../firebase';


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
            
        }).then((docRef)=>{
            newdata= docRef.data();
        })
        .catch((err) => {
            error = err;
            console.error("Error updating document: ", error);
        });
        
    
    return {newdata,error}

}

export default UpdateTutor;