import React, { useState, useEffect } from "react";



// boostrap impots
import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import Custom css
import { LessonButtons} from "../dashboard/TutorDashboardElements";

import Spinner from "../../Spinner/Spinner";
import useFetchLessonByCourseId from "../hooks/useFetchLessonByCourseId";


export default function CourseLessonBtnLists(props) {
   

const [displayData,setDisplayData] = useState(null)
//const { loading, courses } = useFetchCoursesById(props.id);
  const { loading, lessons } = useFetchLessonByCourseId(props.id);


function LessonDetails(lessons){
//   const loadview=()=>{
//     LoadLessonTab(lessons)onClick={loadview}
//   }
    return (
      <LessonButtons key={lessons.id}  className="p-3 m-3 text-center"> 
                {!loading && lessons.title}
                {loading && <Spinner/>}
      </LessonButtons>
      );
  
}

// Display the list of lessons

 
const LoadLessonTab=(lessons)=>{
  
  setDisplayData(lessons);
//   setView(2);

}
const LoadCourseTab=()=>{
 // setView(1); 
}

  return (
    <div fluid className="">

   
        <Col >
            <LessonButtons  active onClick={LoadCourseTab} className="p-3 m-3 text-center"> 
            Course Details
            </LessonButtons>

            {lessons && lessons.map((lesson) => (LessonDetails(lesson)))}
            {loading && <Spinner/>}
            
          </Col>
               
    </div>
  );
}
