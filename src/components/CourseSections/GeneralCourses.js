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
import {useAuth} from '../../contexts/AuthContext'
import useFetchCourses from "./hooks/useFetchCourses";
import { Badge } from "react-bootstrap";


const CourseSections = (props) => {

const lightBg = false;
const imgStart = true;
const { userID } = useAuth()
// let userID ="a3n1oGDjNldi6cnGMqmmg3R6Ll83";

console.log(userID)


 const CourseList =(lessons)=>{
  return lessons.map((lesson) => (MyCourseDetails(lesson)));
}


function MyCourseDetails(data){
   const { courses } =  useFetchCourses();

    console.log(courses)

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
                  <Subtitle className="text-dark m-2" >{courses.tag}</Subtitle>
                  <Subtitle className="text-dark m-2" >{courses.category}</Subtitle>
                  <Details>
                    {courses.skills && data.skills.value.map((skill,index)=>(
                       <Badge pill bg="secondary" variant="dark" text="dark" className=" bg-secondary mx-1">
                    {skill}
                    </Badge>
                      ))}
                 
                  </Details>
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
  
}
    console.log(props.courses)
      

      return(
        
            props.courses && CourseList(props.courses)
      )
 
};

export default CourseSections;
