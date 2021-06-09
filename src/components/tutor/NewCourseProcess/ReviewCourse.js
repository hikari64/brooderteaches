import React, { useState } from "react";



// boostrap impots
import { Container, Row, Col, Button } from "react-bootstrap";

import { LessonButtons,
 
  AddLessonButtons
  } from "../dashboard/TutorDashboardElements";

import useFetchLessonById from "../hooks/useFetchLessonById";
import Spinner from "../../Spinner/Spinner";
import { CourseDetails,ViewLessonDetails } from "../courses/components";

// import Custom css
export default function ReviewCourse(props) {
   
// import "./signupprocess.css";
const [view,setView] = useState(1)
const [displayData,setDisplayData] = useState(null)
 

function LessonDetails(id){
  const { loading, lessons } =  useFetchLessonById(id);
  const loadview=()=>{
    LoadLessonTab(lessons)
  }
    return (
      <LessonButtons key={id} onClick={loadview} className="p-3 m-3 text-center"> 
                {!loading && lessons.title}
                {loading && <Spinner/>}
      </LessonButtons>
      );
  
}

// Display the list of lessons
const LessonList =(lessons)=>{
  if (lessons.length) {
      return lessons.map((lesson) => (LessonDetails(lesson)));
  }else{
    return <h4 className="text-secondary text-center">no lessons</h4>;
  }
}


  // NAVBAR CONTROLS


const LoadLessonTab=(lesson)=>{
  
  setDisplayData(lesson);
  setView(2);

}
const LoadCourseTab=()=>{
  setView(1); 
}

if(!props.courses){ 
  return <h2 className="text-danger">Error : we couldn't fecth your data at this time, please reload your tab </h2>;
}
  return (
    <div fluid className="">

      <Container className="height-half mx-sm-0">
        <Row className="mt-4 mb-4 mx-sm-0">
        <Col xs={3}>
            <LessonButtons  active onClick={LoadCourseTab} className="p-3 m-3 text-center"> 
            Course Details
            </LessonButtons>
            {props.courses.lesson && LessonList(props.courses.lesson)}
            <AddLessonButtons to={`/tutor-create-lesson/${props.courses.id}`} className="p-3 m-3 text-center"> 
              + Add Lesson
            </AddLessonButtons>
          </Col>
          {view === 1 && <CourseDetails courses={props.courses}/>}
          {view === 2 && <ViewLessonDetails courses={displayData}/>}
         

          
         
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
