import React, { useState } from "react";

// other component imports
import PersonalInformation from "./PersonalInformation";
import Verification from "./Verification";
import Payments from "./Payments";

export default function Process({ProcessIndicator}) {
  const [step, setStep] = useState(1);
  const [data,setData] = useState({
    Names:null,
    DateofBirth:null,
    Address:null,
    Contact:null,
    Email:null,
    VerificationID:null,
    Avatar:null,
  })
  const updateData =(item,value)=>{
    setData(data => ({...data, [item]:value}))
   
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
      return <PersonalInformation data={data} updateData={updateData} nextStep={nextStep} />;

    case 2:
      return <Verification data={data} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />;

    case 3:
      return <Payments data={data} updateData={updateData} prevStep={prevStep} />;

    default:
      return <h1>Encountered an error</h1>;
  }
}
