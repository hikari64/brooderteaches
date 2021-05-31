import React, { useState } from "react";

// other component imports
import CourseDetails from "./CourseDetails";
import ReviewCourse from "./ReviewCourse";
import UploadLessons from "./UploadLessons";

export default function NewCourseProcess({SetIndicator}) {
  const [step, setStep] = useState(1);

  // Proceed to next step
  const nextStep = ({SetIndicator}) => {
    setStep(step + 1);
    SetIndicator(step);
  };

  // Previous step
  const prevStep = ({SetIndicator}) => {
    setStep(step - 1);
    SetIndicator(step);

  };

  // handle

  switch (step) {
    case 1:
      return <CourseDetails nextStep={nextStep(SetIndicator)} />;

    case 2:
      return <UploadLessons nextStep={nextStep(SetIndicator)} prevStep={prevStep(this.props.SetIndicator)} />;

    case 3:
      return <ReviewCourse prevStep={prevStep(SetIndicator)} />;

    default:
      return <h1>Encountered an error</h1>;
  }
}
