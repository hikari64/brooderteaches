import React, { useState } from "react";

// boostrap impots
import { Container, Row, Col, Button } from "react-bootstrap";

import {
  LessonButtons,
  AddLessonButtons,
} from "../dashboard/TutorDashboardElements";

import useFetchLessonById from "../hooks/useFetchLessonById";
import Spinner from "../../Spinner/Spinner";
import { CourseDetails, ViewLessonDetails } from "../courses/components";
import useFetchCoursesById from "../hooks/useFetchCoursesById";
import useFetchLessonByCourseId from "../hooks/useFetchLessonByCourseId";

// import Custom css
export default function PreviewCourse({ courseId, prevStep, nextStep }) {
  // import "./signupprocess.css";
  const [view, setView] = useState(1);
  const [displayData, setDisplayData] = useState(null);

  const { loading, courses } = useFetchCoursesById(courseId);
  const { lessons } = useFetchLessonByCourseId(courseId);

  function LessonDetails(id) {
    const loadview = () => {
      LoadLessonTab(id);
    };
    return (
      <LessonButtons
        key={id.id}
        onClick={loadview}
        className="p-3 m-3 text-center"
      >
        {!loading && id.title}
        {loading && <Spinner />}
      </LessonButtons>
    );
  }

  // Display the list of lessons
  const LessonList = (lessons) => {
    if (lessons.length) {
      return lessons.map((lesson) => LessonDetails(lesson));
    } else {
      return <h4 className="text-secondary text-center">no lessons</h4>;
    }
  };

  // NAVBAR CONTROLS

  const LoadLessonTab = (lesson) => {
    setDisplayData(lesson);
    setView(2);
  };
  const LoadCourseTab = () => {
    setView(1);
  };

  if (!courses) {
    return (
      <h2 className="text-danger">
        Error : we couldn't fecth your data at this time, please reload your tab{" "}
      </h2>
    );
  }
  return (
    <div fluid className="">
      <Container className="height-half mx-sm-0">
        <Row className="mt-4 mb-4 mx-sm-0">
          <Col xs={3}>
            <LessonButtons
              active
              onClick={LoadCourseTab}
              className="p-3 m-3 text-center"
            >
              Course Details
            </LessonButtons>
            {courses.lesson && LessonList(lessons)}
            <AddLessonButtons
              to={`/tutor-create-lesson/${courses.id}`}
              className="p-3 m-3 text-center"
            >
              + Add Lesson
            </AddLessonButtons>
          </Col>
          {view === 1 && <CourseDetails courses={courses} />}
          {view === 2 && <ViewLessonDetails courses={displayData} />}
        </Row>
        <Col className="text-center">
          <Button onClick={prevStep} className="primary-button">
            Go Back
          </Button>
          <Button onClick={nextStep} className="primary-button">
            {!courses.verified && <span>Publish c</span>}
          </Button>
        </Col>
      </Container>
    </div>
  );
}
