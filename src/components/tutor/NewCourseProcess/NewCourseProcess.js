import React, { useState } from "react";

// other component imports
import CourseDetails from "./CourseDetails";
import ReviewCourse from "./ReviewCourse";
import UploadLessons from "./UploadLessons";

export default function NewCourseProcess({ProcessIndicator}) {
  const [step, setStep] = useState(1);

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
    ProcessIndicator(step + 1);
  };

  // Previous step
  const prevStep = () => {
    setStep(step - 1);
    ProcessIndicator(step + 1);

  };

 
  // handle

  switch (step) {
    case 1:
      return <CourseDetails nextStep={nextStep} />;

    case 2:
      return <UploadLessons nextStep={nextStep} prevStep={prevStep} />;

    case 3:
      return <ReviewCourse nextStep={nextStep}  prevStep={prevStep} />;

    default:
      return <h1>Encountered an error</h1>;
  }
}
