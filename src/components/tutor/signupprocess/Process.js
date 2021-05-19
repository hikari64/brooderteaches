import React, { useState } from "react";

// other component imports
import PersonalInformation from "./PersonalInformation";
import Verification from "./Verification";
import Payments from "./Payments";

export default function Process() {
  const [step, setStep] = useState(1);

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // handle

  switch (step) {
    case 1:
      return <PersonalInformation nextStep={nextStep} />;

    case 2:
      return <Verification nextStep={nextStep} prevStep={prevStep} />;

    case 3:
      return <Payments prevStep={prevStep} />;

    default:
      return <h1>Encountered an error</h1>;
  }
}
