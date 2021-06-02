import React, { useEffect, useState } from "react";

// other component imports
import PersonalInformation from "./PersonalInformation";
import Verification from "./Verification";
import Payments from "./Payments";
import AddTutor from "../hooks/useAddTutor";


export default function Process({ProcessIndicator}) {
  const [step, setStep] = useState(1);
  const [data,setData] = useState({
    names:null,
    dateOfBirth:null,
    address:null,
    contact:null,
    email:null,
    verificationID:null,
    avatar:null,
  })
  
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
  
   
    
  

  switch (step) {
    case 1:
      return <PersonalInformation data={data} updateData={UpdateData} nextStep={nextStep} />;

    case 2:
      return <Verification Submit={Submit} updateData={UpdateData} nextStep={nextStep} prevStep={prevStep} />;

    case 3:
      return <Payments data={data} updateData={UpdateData} prevStep={prevStep} />;

    default:
      return <h1>Encountered an error</h1>;
  }
}
