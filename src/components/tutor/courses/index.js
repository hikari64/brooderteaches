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
  courses,
  DurationIcon,
  StartIcon,
  FeeIcon,
} from "../../CourseSections/CourseElements";
import { Container, Row, Col, Image } from "react-bootstrap";

import wave from '../../../images/wave.png'


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
  //         items.push(doc.courses());
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

  // MOCK courses COURSES
//const courses = filteredCourse

  const result = courses.map((courses,index) => (
    <Row key={index} className="mt-2 my-3">
    {/* <Row id={courses.id}  lightBg={lightBg}> */}
          <Col sm={12} md={4} lg={5}>
              <Img fluid  
               className="rounded-6 bg-gradient"
              src={courses.previewImg || wave} alt={courses.alt}></Img>
          </Col>
          <Col >
            <div>
              <Heading className="text-dark" to={`/about/${courses.id}`}>
                {courses.title}
              </Heading>
              <Subtitle>{courses.about}</Subtitle>
              <Details className="my-3">
                <courses>
                <DurationIcon /> {courses.duration}{courses.period ==1 && " Weeks"}{courses.period ==2 && "Months"}
                </courses>
                <courses>
                  <StartIcon />
                  {courses.startDate}
                </courses>
                <courses>
                  <FeeIcon />
                  GHC {courses.price}
                </courses>
              </Details>
              <CourseBtnLink to={`/tutor-about/${courses.id}`}>
                Watch Preview
              </CourseBtnLink>
              
            </div>
          </Col>
          
    {/* </Row> */}
  </Row>
    // <CourseContainer key={courses.id}>
    //   <CourseDetails id={courses.id}  lightBg={courses.lightBg}>
    //     <CourseWrapper>
    //       <CourseRow imgStart={courses.previewImg}>
    //         <Column1>
    //           <TextWrapper>
    //             <Heading to={`/tutor-about/${courses.id}`}>
    //               {courses.title}
    //             </Heading>
    //             <Subtitle>{courses.about}</Subtitle>
    //             <Details>
    //               <courses>
    //                 <DurationIcon /> {courses.duration}{courses.period ==1 && " Weeks"}{courses.period ==2 && "Months"}
    //               </courses>
    //               <courses>
    //                 <StartIcon />
    //                 {courses.start}
    //               </courses>
    //               <courses>
    //                 <FeeIcon />
    //                  GHC {courses.price}
    //               </courses>
    //             </Details>
    //             <CourseBtnLink to={`/tutor-about/${courses.id}`}>
    //               Watch Preview
    //             </CourseBtnLink>
                
    //           </TextWrapper>
    //         </Column1>
    //         <Column2>
    //           <ImgWrap>
    //             {/* <Img> */}
    //             <Img src={courses.previewImg} alt={courses.alt}></Img>
    //           </ImgWrap>
    //         </Column2>
    //       </CourseRow>
    //     </CourseWrapper>
    //   </CourseDetails>
    // </CourseContainer>
  ));
  return <>{result}</>;
};

export default CourseSections;
