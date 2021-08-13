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
  const [courseId, setCourseId] = useState("");
  const [courseData, setCourseData] = useState({
    title: "",
    about: "",
    tag:'',
    duration: "",
    startDate: "",
    price: '',
    level: "",
    period:'',
    preview: '',
    tutorId: '',
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
  const [error, setError] = useState({
    title: "",
    about: "",
    tag:"",
    duration: "",
    startDate: "",
    price: '',
    level: "",
    period:'',
    preview: '',
    previewImg: '',
    tutorId: '',
    students: [],
    lesson: [],
  });

  console.log("courseData", courseData);

  const { currentUser,userID } = useAuth();

  

  const UpdateData = (item, value) => {
    setCourseData((courseData) => ({ ...courseData, [item]: value }));
    setError((error) => ({ ...error, [item]: null }));
  };
  const UpdateLessonData = (item, value) => {
    setLessonData((lessonData) => ({ ...lessonData, [item]: value }));
    setError((error) => ({ ...error, [item]: null }));

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

  //submit New Course
  const Submit = () =>{
    console.log("submitin")
    setLoading(!loading)
     AddCourse(courseData,setLoading,setCourseId,userID);
    
  }

  // Submit New Lesson
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
              error={error}
              setError={setError}
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
              error={error}
              setError={setError}
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
          {!loading && <ReviewCourse courseId={courseId} error={error}  nextStep={nextStep} prevStep={prevStep} />}
        </React.Fragment>
      );

    default:
      return <h1>Encountered an error</h1>;
  }
}
