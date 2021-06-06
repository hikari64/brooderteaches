import React, { useEffect, useState } from "react";


import { useAuth } from "../../../contexts/AuthContext";
// other component imports
import PersonalInformation from "./PersonalInformation";
import Verification from "./Verification";
import Payments from "./Payments";
import AddTutor from "../hooks/useAddTutor";
import useFetchTutorsById from "../hooks/useFetchTutorById";
import Spinner from "../../Spinner/Spinner";


export default function Process({ProcessIndicator}) {
  
  const { userID,currentUser } = useAuth()

 const { loading, tutors } = useFetchTutorsById(userID); 
 const [step, setStep] = useState(1);
  const [data,setData] = useState({...tutors})
  
  const UpdateData =(item,value)=>{
    setData(data => ({...data, [item]:value}))
   
  }

  const Submit = () =>{
    AddTutor(data);
  }

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
    ProcessIndicator(step + 1);
  };

  // Previous step
  const prevStep = () => {
    setStep(step - 1);
    ProcessIndicator(step - 1);

  };

  

  // handle
  
   
    
  if (tutors){

  switch (step) {
    case 1:
      return <PersonalInformation data={tutors} updateData={UpdateData} nextStep={nextStep} />;

    case 2:
      return <Verification Submit={Submit} updateData={UpdateData} nextStep={nextStep} prevStep={prevStep} />;

    case 3:
      return <Payments data={data} updateData={UpdateData} prevStep={prevStep} />;

    default:
      return <h1>Encountered an error</h1>;
    } 

   }
   
   return (loading && <Spinner/>);

}
