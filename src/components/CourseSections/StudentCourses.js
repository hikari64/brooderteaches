import React from "react";
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

import useFetchCoursesById from "./hooks/useFetchCoursesById";


const CourseSections = (props) => {

const lightBg = false;
const imgStart = true;

const CourseList =(lessons)=>{
  return lessons.map((lesson) => (MyCourseDetails(lesson)));

}


function MyCourseDetails(data){
   const { courses } =  useFetchCoursesById(data);
    return (
      <CourseContainer key={data}>
        <CourseDetails id={courses.id}  lightBg={lightBg}>
          <CourseWrapper>
            <CourseRow imgStart={imgStart}>
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
  
}
      

      return(
        
            props.courses && CourseList(props.courses)
      )
 
};

export default CourseSections;
