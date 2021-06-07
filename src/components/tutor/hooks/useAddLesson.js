import React ,{ useState ,useEffect} from "react";
import { useAuth } from "../../../contexts/AuthContext";
import {firestore,timestamp,AddArrayField} from '../../../firebase';
import AddFile from "./useAddFile";
import {storage} from '../../../firebase';



const AddLesson =(data,setLoading,courseId)=>{
    let error = ''
    let newdata = ''
    let loadingStatus =false;
    let id="";
    let progress;
  
    let video =AddFile(data.video,'videos');
     
    let assignment =AddFile(data.assignment ,'assignment');
    
    
    
        //references
        const createdAt = timestamp;

        const course = firestore.collection('lessons');

        const storageRef = storage.ref('IDs');

        storageRef.put(data.verificationID).on('state_changed',(snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            progress = percentage;
        }, (err) => {
            error =err;
        }, async () =>{
            const url = await storageRef.getDownloadURL();
            
            course.add({
                title:data.title,
                courseId:courseId,
                summary:data.summary,
                video:video.newUrl,
                assignment: assignment.url,
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
            
            
        })
        

        
    

}

export default AddLesson;