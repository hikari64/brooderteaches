import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { firestore } from "../../../firebase";
import Spinner from "../../Spinner/Spinner";
import AddCourse from "../hooks/useAddCourse";
import AddLesson from "../hooks/useAddLesson";
import useFetchCoursesById from "../hooks/useFetchCoursesById";

// other component imports
import CourseDetails from "./CourseDetails";
import PreviewCourse from "./PreviewCourse";
import ReviewCourse from "./ReviewCourse";
import UploadLessons from "./UploadLessons";
import PublishCourse from "../hooks/usePublishCourse";
import { Link, useHistory } from "react-router-dom";

export default function NewCourseProcess({ ProcessIndicator }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [courseData, setCourseData] = useState({
    title: "",
    about: "",
    tag: "",
    duration: "",
    startDate: "",
    price: "",
    level: "",
    period: "",
    category: "",
    skills: [],
    preview: "",
    tutorId: "",
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
    tag: "",
    duration: "",
    startDate: "",
    price: "",
    level: "",
    period: "",
    preview: "",
    category: "",
    previewImg: "",
    tutorId: "",
    students: [],
    lesson: [],
  });

  console.log("courseData", courseData);

  const { currentUser, userID } = useAuth();
  const history = useHistory();
  // useEffect(()=>{
  //   const
  //   const { loading, courses } = useFetchCoursesById(id);

  // })

  const UpdateData = (item, value) => {
    setCourseData((courseData) => ({ ...courseData, [item]: value }));
    setError((error) => ({ ...error, [item]: null }));
  };
  const UpdateSkill = (value) => {
    setCourseData((courseData) => ({ ...courseData, skills: [...value] }));
  };
  const UpdateCategory = (value) => {
    setCourseData((courseData) => ({ ...courseData, skills: [...value] }));
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
  const Submit = () => {
    console.log("submitin");
    setLoading(!loading);
    AddCourse(courseData, setLoading, setCourseId, userID);
  };

  const SubmitFinal = () => {
    console.log("submitin");
    setLoading(!loading);
    PublishCourse(courseId);
    setLoading(false);
    history.push("/tutor-courses");
  };

  const getCourses = async () => {
    setLoading(true);
    const courses = firestore.collection("courses").doc(courseId);

    await courses.get().then((doc) => {
      if (doc.exists) {
        setCourseData(doc.data());
        setLoading(false);

        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        setError("No such document!");
        setLoading(false);
      }
    });
  };

  // Submit New Lesson
  const SubmitLesson = (url) => {
    setLoading(!loading);
    AddLesson(lessonData, setLoading, courseId, url);
  };

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
              UpdateCategory={UpdateCategory}
              UpdateSkill={UpdateSkill}
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
          {!courseId && !loading && (
            <h1>You can't add a lesson, please create a course first</h1>
          )}
        </React.Fragment>
      );

    case 3:
      return (
        <React.Fragment>
          {loading && <Spinner />}
          {!loading && (
            <PreviewCourse
              courseId={courseId}
              error={error}
              nextStep={SubmitFinal}
              prevStep={prevStep}
            />
          )}
        </React.Fragment>
      );
  }
}
