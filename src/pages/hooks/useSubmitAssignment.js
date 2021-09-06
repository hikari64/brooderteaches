import React ,{ useState ,useEffect} from "react";
import {arrayAdd, firestore,increment,timestamp} from '../../firebase';

import Hashids from 'hashids'



async function SubmitAssignment(data,lessonId,userID,courseId){
 
    const hashids = new Hashids('',5)
    const longhashids = new Hashids('ILoveAVMB-assignemnts',15)
    let error = ''
    let id="";
    let code="";
    let success=false;
    
    
        //references
        const createdAt = timestamp();
       
        // Create a reference to the SF doc.
        const courses = firestore.collection("courses").doc(courseId);
        const students = firestore.collection('students').doc(userID)
        const lessons = firestore.collection('lessons').doc(lessonId)
        const assignments = firestore.collection('assignments')
        const assignmentCount = firestore.collection('assignments').doc('--assignmentCount--')
        
   


        await firestore.runTransaction(async (transaction) => {
            var course =  await transaction.get(courses);
            var student =  await transaction.get(students);
            var lesson =  await transaction.get(lessons);
            var countAssignment =  await transaction.get(assignmentCount);
            // var receipt =  await transaction.get(receipts);
            
              if(!course.exists){   
                        throw "Course does not exist!";
                    }
                    if(!student.exists){   
                        throw "Student does not exist!";
                    } 
                    if(!lesson.exists){   
                        throw "Lesson does not exist!";
                    } 
                    if(!lesson.data().attendee.includes(userID)){
                        throw "User hasn't taken this lesson!";

                    }
                   
                // console.log(ilect.data())
                    
                        var newCount = (countAssignment.data().count || 0) + 1;
                        var newCCount = (course.data().submitedAssignmentCount || 0) + 1; 
                        var newLCount = (lesson.data().submitedAssignmentCount || 0) + 1;
                        var newSCount = (student.data().submitedAssignmentCount || 0) + 1;
                        // console.log(newCount)
                         id = longhashids.encode(newCount);    

                        transaction.update(assignmentCount,{ 
                            count:newCount,
                        });
                        transaction.update(courses,{ 
                            submitedAssignmentCount:newCCount,
                        });
                        transaction.update(lessons,{ 
                            submitedAssignmentCount:newLCount,
                        });
                        transaction.update(students, {
                            submitedAssignmentCount:newSCount,
                            assignments:arrayAdd.arrayUnion(id),
                        });
                        transaction.set(assignments.doc(id), {
                            assignmentId:id,
                            courseName:course.data().title,
                            studentsId:userID,
                            lessonId,
                            assignment:data,
                            review:'',
                            lesson:lesson.data().title,
                            createdAt,
                        })

                     success = true

                    return success;
 
            }).catch((err) => {
                    error = err;
                    console.error("Error submiting assignment: ", error);
                    return error;
                });
        


       
    return {error,success}

}

export default SubmitAssignment;