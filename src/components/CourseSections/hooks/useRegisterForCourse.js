import React ,{ useState ,useEffect} from "react";
import {arrayAdd, firestore,increment,timestamp} from '../../../firebase';




async function RegisterForCourse(data,reference,userID,courseId){
 
    let error = ''
    let id="";
    let success=false;
    
    
        //references
        const createdAt = timestamp();
       
        // Create a reference to the SF doc.
        const courses = firestore.collection("courses").doc(courseId);
        const students = firestore.collection('students').doc(userID)
        const receipts = firestore.collection('enrolmentReceipt');
        
    //add to student id to courses and increase number of students by 1 , increase revenue by amount payed
    // increase number of courses by one for students
    //
    // add reciepts / course payment / course id and students id / amount
    // add co
    //


        await firestore.runTransaction(async (transaction) => {
            var course =  await transaction.get(courses);
            var student =  await transaction.get(students);
            // var receipt =  await transaction.get(receipts);
            
              if(!course.exists){   
                        throw "Course does not exist!";
                    }
                    if(!student.exists){   
                        throw "Student does not exist!";
                    } 
                   
                // console.log(ilect.data())
                    
                        var newCount = (course.data().studentsCount || 0) + 1;
                        var newRevenue = (course.data().revenue || 0) + data.price; 
                        var newSCount = (student.data().coursesCount || 0) + 1;
                        // console.log(newCount)
                        // id = longhashids.encode(newCount);    

                        transaction.update(courses,{ 
                            studentsCount: newCount,
                            revenue:newRevenue,
                            students: arrayAdd.arrayUnion(userID),
                        });
                        transaction.update(students, {
                            coursesCount: newSCount,
                            courses:arrayAdd.arrayUnion(courseId),
                            // courses: firestore.FieldValue.arrayUnion(courseId)
                        });
                        transaction.set(receipts.doc(reference), {
                            reference,
                            courseId,
                            studentsId:userID,
                            amount: parseFloat(data.price),
                            courseName:data.title,
                            createdAt,
                        })

                     success = true

                    return success;
 
            }).catch((err) => {
                    error = err;
                    console.error("Error adding student: ", error);
                    return error;
                });
        


       
    return {error,success}

}

export default RegisterForCourse;