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
import { Container, Row, Col } from "react-bootstrap";

// firebase imports
import { fbapp } from "../../firebase";
import Spinner from '../Spinner/Spinner'

// IMPORTING MOCK DATA FOR NOW
//import { courses } from "../../mock/mock.js";  Disabled inport at this level to rec
// ieve courses list as props from course section


const CourseSections = () => {
  // DISABLED FIREBASE CALLS FOR NOW
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = fbapp.firestore().collection("courses");

    function getCourses() {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setCourses(items);
        setLoading(false);
      });
    }

    useEffect(() => {
      getCourses();
    }, []);

    if (loading) {
      return (
      <Container className="height-half">
      <Row className="mt-4 mb-4">
        <Col md={12} className="mx-auto">
          {loading && <Spinner style="textAlign: center;"/>}
        </Col>
      </Row>
    </Container>);

    }

  // MOCK DATA COURSES
// const courses = filteredCourse
// const db = firestore.firestore();
// db.collection('courses').get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//   });
// });
const lightBg = false;
const imgStart = true;
 
  
    
    const result =  courses.map((data, index) => (
      <CourseContainer key={index}>
        <CourseDetails id={data.id}  lightBg={lightBg}>
          <CourseWrapper>
            <CourseRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <Heading to={`/about/${data.id}`}>
                    {data.title}
                  </Heading>
                  <Subtitle>{data.about}</Subtitle>
                  <Details>
                    <Data>
                      <DurationIcon /> {data.duration}
                    </Data>
                    <Data>
                      <StartIcon />
                      {data.startDate}
                    </Data>
                    <Data>
                      <FeeIcon />
                      {data.price}
                    </Data>
                  </Details>
                  <CourseBtnLink to={`/preview/${data.id}`}>
                    Watch Preview
                  </CourseBtnLink>
                  <CourseBtnLink to={`/register/${data.id}`}>
                    Take this Class
                  </CourseBtnLink>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  {/* <Img> */}
                  <Img src={data.img} alt={data.alt}></Img>
                </ImgWrap>
              </Column2>
            </CourseRow>
          </CourseWrapper>
        </CourseDetails>
      </CourseContainer>
      ));
      

      return <>{result}</>
    
 
};

export default CourseSections;
