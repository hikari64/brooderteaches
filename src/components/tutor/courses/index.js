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
} from "../../CourseSections/CourseElements";

const CourseSections = ({courses}) => {
  // DISABLED FIREBASE CALLS FOR NOW
  //   const [courses, setCourses] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   const ref = firebase.firestore().collection("courses");

  //   function getCourses() {
  //     setLoading(true);
  //     ref.onSnapshot((querySnapshot) => {
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         items.push(doc.data());
  //       });
  //       setCourses(items);
  //       setLoading(false);
  //     });
  //   }

  //   useEffect(() => {
  //     getCourses();
  //   }, []);

  //   if (loading) {
  //     return <h1>Fetching Courses...</h1>;
  //   }

  // MOCK DATA COURSES
//const courses = filteredCourse

  const result = courses.map((courses) => (
    <CourseContainer key={courses.id}>
      <CourseDetails id={courses.id}  lightBg={courses.lightBg}>
        <CourseWrapper>
          <CourseRow imgStart={courses.imgStart}>
            <Column1>
              <TextWrapper>
                <Heading to={`/about/${courses.id}`}>
                  {courses.title}
                </Heading>
                <Subtitle>{courses.description}</Subtitle>
                <Details>
                  <Data>
                    <DurationIcon /> {courses.duration}
                  </Data>
                  <Data>
                    <StartIcon />
                    {courses.start}
                  </Data>
                  <Data>
                    <FeeIcon />
                    {courses.fee}
                  </Data>
                </Details>
                <CourseBtnLink to={`/tutor-preview-course/${courses.id}`}>
                  Watch Preview
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
  ));
  return <>{result}</>;
};

export default CourseSections;