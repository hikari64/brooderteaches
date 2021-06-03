import React, { useState, useEffect } from "react";



// boostrap impots
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { LessonButtons, ReviewHeadings ,CourseTitle,CourseDescription,PlayerStyle,Videocontainer} from "../dashboard/TutorDashboardElements";

import ReactPlayer from "react-player"
import useFetchLessonById from "../hooks/useFetchLessonById";
import Spinner from "../../Spinner/Spinner";
import { CourseDetails } from "../courses/components";

// import Custom css
export default function ReviewCourse(props) {
   
// import "./signupprocess.css";

const [mylessons, setStateMylessons] =useState(null)

 function LessonDetails(id){
  useFetchLessonById(id,setStateMylessons);
  console.log(mylessons)
    return (
      <LessonButtons key={id} to={"/tutor-create-course"} className="p-3 m-3 text-center"> 
                {mylessons && mylessons.title}
                {!mylessons && <Spinner/>}
      </LessonButtons>
      );
  
  
}

// Display the list of lessons
const LessonList =(lessons)=>{
  return lessons.map((lesson) => (LessonDetails(lesson)));
}


  // NAVBAR CONTROLS
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [navbar, setNavbar] = useState(false);

const LoadLessonTab=()=>{
  
}
const LoadCourseTab=()=>{
  
}

  return (
    <div fluid className="">

      <Container className="height-half">
        <Row className="mt-4 mb-4">
        <Col md={3}>
            <LessonButtons  active className="p-3 m-3 text-center"> 
            Course Details
            </LessonButtons>
            {props.courses.lesson && LessonList(props.courses.lesson)}
            
          </Col>
          {

          }
          <CourseDetails courses={props.courses}/>
         
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
