import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import AddCourse from "../hooks/useAddCourse";

// other component imports
import CourseDetails from "./CourseDetails";
import ReviewCourse from "./ReviewCourse";
import UploadLessons from "./UploadLessons";


export default function NewCourseProcess({ProcessIndicator}) {
  const [step, setStep] = useState(1);
  const [loading,setLoading] = useState(false)
  const [courseId,setCourseId] = useState(null)
  const [courseData,setCourseData] = useState({
  
  title:'',
  about:'',
  duration:'',
  startDate:'',
  price:0,
  level:'biginner',
  preview:null,
  tutorId:null,
  students:["1","2"],
  lesson:["234223","2323423423"]
  })
  const { currentUser } = useAuth;


  const UpdateData =(item,value)=>{
    setCourseData(data => ({...data, [item]:value}))
   
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

  const Submit = () =>{
    setLoading(!loading)
    const {loadingStatus} = AddCourse(courseData);
    setLoading(loadingStatus)
  }
  // handle

  switch (step) {
    case 1:
      return (
        <React.Fragment>
              {loading && <h1>Loading</h1>}
              {!loading && <CourseDetails Submit={Submit} data={courseData} updateData={UpdateData} nextStep={nextStep} />}
        </React.Fragment>
      )

    case 2:

      return (
        <React.Fragment>
              {loading && <h1>Loading</h1>}
              {!loading &&   <UploadLessons nextStep={nextStep} prevStep={prevStep} />}
        </React.Fragment>
      )
      
     
    case 3:
      return (
        <React.Fragment>
              {loading && <h1>Loading</h1>}
              {!loading && <ReviewCourse nextStep={nextStep}  prevStep={prevStep} />}
        </React.Fragment>
      )


    default:
      return <h1>Encountered an error</h1>;
  }
}
