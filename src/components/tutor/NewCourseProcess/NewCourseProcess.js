import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Spinner from "../../Spinner/Spinner";
import AddCourse from "../hooks/useAddCourse";
import AddLesson from "../hooks/useAddLesson";

// other component imports
import CourseDetails from "./CourseDetails";
import ReviewCourse from "./ReviewCourse";
import UploadLessons from "./UploadLessons";

export default function NewCourseProcess({ ProcessIndicator }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [courseId, setCourseId] = useState("0glNQdEhbYi4TNg7GAwf");
  const [courseData, setCourseData] = useState({
    title: "",
    about: "",
    duration: "",
    startDate: "",
    price: null,
    level: "",
    period:'',
    preview: null,
    tutorId: null,
    students: [],
    lesson: [],
  });
  const [lessonData, setLessonData] = useState({
    title: "",
    courseId: "",
    summary: "",
    video: "",
    assigment: "",
    date: "",
  });

  console.log("courseData", courseData);

  const { currentUser,userID } = useAuth();

  

  const UpdateData = (item, value) => {
    setCourseData((courseData) => ({ ...courseData, [item]: value }));
  };
  const UpdateLessonData = (item, value) => {
    setLessonData((lessonData) => ({ ...lessonData, [item]: value }));
  };

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

  const Submit = (url) =>{
    setLoading(!loading)
     AddCourse(courseData,setLoading,setCourseId,userID,url);
    
  }
  const SubmitLesson = (url) =>{
    setLoading(!loading)
    AddLesson(lessonData,setLoading,courseId,url);
    
  }
  // handle

  switch (step) {
    case 1:
      return (
        <React.Fragment>
          {loading && <Spinner />}
          {!loading && (
            <CourseDetails
              Submit={Submit}
              data={courseData}
              updateData={UpdateData}
              nextStep={nextStep}
            />
          )}
        </React.Fragment>
      );

    case 2:
      return (
        <React.Fragment>
          {loading && <Spinner />}
          {courseId && (
            <UploadLessons
              Submit={SubmitLesson}
              courseId={courseId}
              updateData={UpdateLessonData}
              data={lessonData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {!courseId && (
            <h1>You can't add a lesson, please create a course first</h1>
          )}
        </React.Fragment>
      );

    case 3:
      return (
        <React.Fragment>
          {loading && <Spinner />}
          {!loading && <ReviewCourse courseId={courseId} nextStep={nextStep} prevStep={prevStep} />}
        </React.Fragment>
      );

    default:
      return <h1>Encountered an error</h1>;
  }
}
