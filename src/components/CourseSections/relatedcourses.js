import React, { useState, useEffect } from "react";
import {
  RelatedCourseContainer,
  RelatedCourseDetails,
  RelatedTextWrapper,
  RelatedHeading,
  RelatedHeading2,
  RelatedSubtitle,
  RelatedImgWrap,
  RelatedColumn1,
  RelatedColumn2,
  RelatedImg,
  RelatedCourseRow,
  RelatedCourseWrapper,
  RelatedCourseBtnLink,
  RelatedDetails,
  RelatedData,
  RelatedDurationIcon,
  RelatedStartIcon,
  RelatedFeeIcon,
} from "./RelatedElements";
// import { courses } from '../AllCourses/CourseData';

import { fbapp } from "../../firebase";
import CourseSections from ".";

const RelatedCoursesSection = ({ skills }) => {
  const lightBg = false;
  const imgStart = true;

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const db = fbapp.firestore();
      let coursesRef = "";

      coursesRef = db
        .collection("courses")
        .orderBy("createdAt", "desc")
        .limit(3);

      coursesRef.get().then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        if (querySnapshot.empty) {
          const coursesRef = db
            .collection("courses")
            .orderBy("createdAt", "desc")
            .limit(3);
          coursesRef.get().then((querySnapshot) => {
            querySnapshot.forEach((element) => {
              var data = element.data();
              setCourses((arr) => [...arr, data]);
            });
          });
        } else {
          querySnapshot.forEach((element) => {
            var data = element.data();
            setCourses((arr) => [...arr, data]);
          });
        }
      });
    };
    fetchCourses();
  }, []);

  return (
    <>
      <RelatedHeading2 to="">Related Courses</RelatedHeading2>
      <br />

      {courses.length < 1 && (
        <h4 className="text-black-50">NO related courses</h4>
      )}

      {courses && <CourseSections className="text-start" courses={courses} />}
    </>
  );
};

export default RelatedCoursesSection;
