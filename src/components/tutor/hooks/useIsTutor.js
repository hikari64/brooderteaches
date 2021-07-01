import { useState, useEffect } from "react";

//importing firebase and initializing db constant
import { firestore } from "../../../firebase";



export default function useIsTutor(params,setTrue) {
    //retrieving all the courses
      const courses =  firestore.collection("tutors").doc(params);
      
      courses.get().then((doc) => {
        if (doc.exists) {

            console.log("lesson data: fetched", doc.data());

          setTrue(true);
         
        } else {
            // doc.data() will be undefined in this case
            
           
            console.log("No such document!");
            setTrue(false);

            //return false;

        }
    })
  
    


   // return response;


}
