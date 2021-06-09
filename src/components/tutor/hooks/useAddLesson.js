import {firestore,timestamp,AddArrayField} from '../../../firebase';




const AddLesson =(data,setLoading,courseId)=>{
    let error = ''
    let id="";
  
    
    
    
        //references
        const createdAt = timestamp();

        const course = firestore.collection('lessons');

            course.add({
                title:data.title,
                courseId:courseId,
                summary:data.summary,
                video:data.video,
                assignment: data.assignment,
                date: data.date,
                createdAt
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