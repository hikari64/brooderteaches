import React, { useState, useEffect } from "react";



// boostrap impots
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { LessonButtons, ReviewHeadings ,CourseTitle,CourseDescription,PlayerStyle,Videocontainer} from "../dashboard/TutorDashboardElements";

import ReactPlayer from "react-player"
import useFetchLessonById from "../hooks/useFetchLessonById";
import Spinner from "../../Spinner/Spinner";

// import Custom css
// import "./signupprocess.css";
const LessonDetails =(id)=>{
  const { loading, lessons } = useFetchLessonById(id);
  if(lessons){
    return (
      <LessonButtons key={id} to={"/tutor-create-course"} className="p-3 m-3 text-center"> 
                {!loading && "lessons"}
                {loading && <Spinner/>}
      </LessonButtons>
      );
  }
   console.log("recieved unique, " + lessons)
  return (
    <LessonButtons key={id} to={"/tutor-create-course"} className="p-3 m-3 text-center"> 
              {!loading && "lessons"}
              {loading && <Spinner/>}
    </LessonButtons>
  );
}

// Display the list of lessons
const LessonList =(lessons)=>{
  return lessons.map((lesson) => (LessonDetails(lesson)));
}

export default function ReviewCourse(props) {
  
  // NAVBAR CONTROLS
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [navbar, setNavbar] = useState(false);



  return (
    <div fluid className="">

      <Container className="height-half">
        <Row className="mt-4 mb-4">
        <Col md={3}>
            <LessonButtons to={"/tutor-create-course"} active className="p-3 m-3 text-center"> 
            Course Details
            </LessonButtons>
            {props.courses.lesson && LessonList(props.courses.lesson)}
            {/* {props.courses.lesson.map((id) => (LessonDetails(id)))} */}
            
          </Col>
          <Col md={8} className="mx-auto">
            <ReviewHeadings className="m-2 mx-auto">
              Course Title
            </ReviewHeadings>
            <CourseTitle>
            {props.courses.title}

            </CourseTitle>
            <ReviewHeadings className="m-2 mx-auto">Course Description</ReviewHeadings>
            <CourseDescription>
            {props.courses.about}
            </CourseDescription>
            <ReviewHeadings  className="m-2 mx-auto">Introductory Video</ReviewHeadings>
            <PlayerStyle >
                        <ReactPlayer url={props.courses.preview}
                            className={Videocontainer}
                            playing
                            width="100%"
                            height="100%"
                            controls={false}
                        />
              </PlayerStyle>
            
          </Col>

        </Row>
        <Col className="text-center">
                <Button onClick={props.prevStep} className="primary-button">
                Go Back
              </Button>
              <Button onClick={props.nextStep} className="primary-button">
                {!props.courses.verified && <span>Publish</span>}
              </Button>
              </Col>
      </Container>
    </div>
  );
}
