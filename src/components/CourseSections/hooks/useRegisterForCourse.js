import React ,{ useState ,useEffect} from "react";
import {arrayAdd, firestore,increment,timestamp} from '../../firebase';




async function RegisterForCourse(data,userID,currentElection){
 
    let error = ''
    let id="";
    let success=false;
    
    
        //references
        const createdAt = timestamp();
       
        // Create a reference to the SF doc.
        var MainCounters = firestore.collection("EC").doc("--Counter--");
        var election = firestore.collection("election").doc(currentElection.id);
        const portfolios = firestore.collection('voters')
        const users = firestore.collection('users').doc(userID);
        
        //add to student id to courses and increase number of students by 1 , increase revenue by amount payed
    // increase number of courses by one for students
    // add reciepts / course payment / course id and students id / amount
    // add co
    //


        await firestore.runTransaction(async (transaction) => {
            var user =  await transaction.get(users);
            var ilect =  await transaction.get(election);
            var EC =  await transaction.get(MainCounters);
            
              if(!user.exists){   
                        throw "User does not exist!";
                    }
                    if(!ilect.exists){   
                        throw "election does not exist!";
                    } 
                    if(ilect.data().userId !== userID){ 
                        throw "You are not admin for this election";
                    }
                    if(ilect.data().live){ 
                        throw "You can't edit this election now";
                    }
                // console.log(ilect.data())
                    
                        var newCount = (EC.data().Loadedvoters || 0) + 1;
                        // console.log(newCount)
                        // id = longhashids.encode(newCount);    

                        // transaction.update(MainCounters, { Loadedvoters: newCount });
                        transaction.set(portfolios.doc(id), {
                            // ...data,
                            candidate:[],
                            electionId:currentElection.id,
                            provotersId:id,
                            voters:{...data},
                            votesCast:0,
                            createdAt,
                        })

                        transaction.update(election, {
                            Provoters: id,
                        });
                     success = true

                    return success;
 
            }).catch((err) => {
                    error = err;
                    console.error("Error adding election: ", error);
                    return error;
                });
        


       
    return {error,success}

}

export default RegisterForCourse;