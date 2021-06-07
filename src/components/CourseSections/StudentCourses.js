import React, { useState, useEffect } from "react";
import {
  CourseContainer,
  CourseDetails,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Column1,
  Column2,
  Img,
  CourseRow,
  CourseWrapper,
  CourseBtnLink,
  Details,
  Data,
  DurationIcon,
  StartIcon,
  FeeIcon,
} from "./CourseElements";

// firebase imports
import {fbapp} from "../../firebase";
import {useAuth} from '../../contexts/AuthContext'
import useFetchCoursesById from "./hooks/useFetchCoursesById";
import { CourseDescription } from "../tutor/dashboard/TutorDashboardElements";


const CourseSections = (props) => {

const lightBg = false;
const imgStart = true;
const { userID } = useAuth()

console.log(userID)
const db = fbapp.firestore();


 //const [courses, setCourses] = useState([]);

//  Delete this function and rather implement the hook for fetching 
//  courses based on the user's ID
//  user ID is defined here: const { userID } = useAuth()


 function fetchMyCourses(item, index, array) {

 }

 const CourseList =(lessons)=>{
  return lessons.map((lesson) => (MyCourseDetails(lesson)));
  // return(
  //   <h1>returning </h1>
  //       // {props.courses && CourseList(props.courses)}
  // )

}


function MyCourseDetails(data){
   const { courses } =  useFetchCoursesById(data);
  // const loadview=()=>{
  //   LoadLessonTab(lessons)
  // }
    return (
      <CourseContainer key={data}>
        <CourseDetails id={courses.id}  lightBg={lightBg}>
          <CourseWrapper>
            <CourseRow imgStart={lightBg}>
              <Column1>
                <TextWrapper>
                  <Heading to={`/about/${courses.id}`}>
                    {courses.title}
                  </Heading>
                  <Subtitle>{courses.about}</Subtitle>
                  <Details>
                    <Data>
                      <DurationIcon /> {courses.duration}
                    </Data>
                    <Data>
                      <StartIcon />
                      {courses.startDate}
                    </Data>
                    <Data>
                      <FeeIcon />
                      {courses.price}
                    </Data>
                  </Details>
                  <CourseBtnLink to={`/preview/${courses.id}`}>
                    Watch Preview
                  </CourseBtnLink>
                  <CourseBtnLink to={`/register/${courses.id}`}>
                    Take this Class
                  </CourseBtnLink>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  {/* <Img> */}
                  <Img src={courses.img} alt={courses.alt}></Img>
                </ImgWrap>
              </Column2>
            </CourseRow>
          </CourseWrapper>
        </CourseDetails>
      </CourseContainer>
    
      );
  //     return(
  //   <h1>returning </h1>
  //       // {props.courses && CourseList(props.courses)}
  // )
  
}
    // const result =  courses.map((data) => (
     
    //   ));
    console.log(props.courses)
      

      return(
        
            props.courses && CourseList(props.courses)
      )
 
};

export default CourseSections;
