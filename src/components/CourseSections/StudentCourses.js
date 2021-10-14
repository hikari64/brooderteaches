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
import { fbapp } from "../../firebase";

const CourseSections = (props) => {
  const lightBg = false;
  const imgStart = true;

  const db = fbapp.firestore();
  const [courses, setCourses] = useState([]);
  const coursesArray = props.courses;
  let result;

  useEffect(() => {
    const fetchCourses = async () => {
      console.log(coursesArray);
      coursesArray.map((id) =>
        db
          .collection("courses")
          .where("id", "==", id)
          .get()
          .then((querySnapshot) => {
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach((element) => {
              var data = element.data();
              setCourses((arr) => [...arr, data]);
            });
          })
      );
    };
    fetchCourses();
  }, []);

  // }
  result = courses.map((data, index) => (
    <CourseContainer key={index}>
      <CourseDetails id={courses.id} lightBg={lightBg}>
        <CourseWrapper>
          <CourseRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading to={`/about/${courses.id}`}>{courses.title}</Heading>
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
  ));

  return <>{result}</>;
};

export default CourseSections;
