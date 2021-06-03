import React ,{ useState ,useEffect} from "react";
import { useAuth } from "../../../contexts/AuthContext";
import {firestore,timestamp,AddArrayField} from '../../../firebase';
import AddFile from "./useAddFile";



const AddLesson =(data,setLoading,courseId)=>{
    let error = ''
    let newdata = ''
    let loadingStatus =false;
    let id="";
  
    let video =AddFile(data.video,'videos');
     
    let assignment =AddFile(data.assignment ,'assignment');
    
    
    
        //references
        const createdAt = timestamp();
        const course = firestore.collection('lessons')
        course.add({
            
            title:data.title,
            courseId:courseId,
            summary:data.summary,
            video:video.newUrl,
            assignment: assignment.newUrl,
            date: data.date,
        }).then((docRef) => {
            id = docRef.id;
            course.doc(id).update({id})

            //this function adds the course id to the course lessons
            AddArrayField('courses',"lesson",id,courseId)

            console.log("Document written with ID: ", docRef.id);
            setLoading(false);
        })
        .catch((err) => {
            error = err
            console.error("Error adding document: ", error);
        });
        
    

}

export default AddLesson;