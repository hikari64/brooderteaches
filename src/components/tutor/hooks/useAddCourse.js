import React ,{ useState ,useEffect} from "react";
import { useAuth } from "../../../contexts/AuthContext";
import {firestore,timestamp,AddArrayField} from '../../../firebase';
import AddFile from "./useAddFile";



const AddCourse =(data,setLoading,setCourseId)=>{
    let error = ''
    let newdata = ''
    let loadingStatus =false;
    let id="";
  
    const {newUrl } =AddFile(data.preview,'videos');
    let tutorId = "4nWqp1P1rYqtfnU2JMTT"
    
    
        //references
        const createdAt = timestamp();
        const course = firestore.collection('courses')
        course.add({
            
            title: data.title,
            about: data.about,
            duration: data.duration,
            startDate: data.startDate,
            price: data.price,
            level: data.level,
            preview: newUrl,
            tutorId,
            students:[],
            lesson:[],
            createdAt
        }).then((docRef) => {
            id = docRef.id;
            course.doc(id).update({id})

            //this function adds the course id to the tutors courses
            AddArrayField('tutors',"courses",id,tutorId)

            console.log("Document written with ID: ", docRef.id);
            setLoading(false);
            setCourseId(id);
        })
        .catch((err) => {
            error = err
            console.error("Error adding document: ", error);
        });
        
    

}

export default AddCourse;