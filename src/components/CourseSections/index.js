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
import { Container, Row, Col, Image } from "react-bootstrap";

// firebase imports
import { fbapp } from "../../firebase";
import Spinner from '../Spinner/Spinner'
import wave from '../../images/wave.png'

// IMPORTING MOCK DATA FOR NOW
//import { courses } from "../../mock/mock.js";  Disabled inport at this level to rec
// ieve courses list as props from course section


const CourseSections = ({courses}) => {
  // DISABLED FIREBASE CALLS FOR NOW
    //const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

   

    if (loading) {
      return (
      <Container className="height-half">
      <Row className="mt-4 mb-4">
        <Col md={12} className="mx-auto">
          {loading && <Spinner style={{textAlign: "center"}}/>}
        </Col>
      </Row>
    </Container>);

    }


const lightBg = false;
// const imgStart = true;
 
  
    
    const result =  courses.map((data, index) => (
      <Row key={index} className="mt-2 my-3">
        {/* <Row id={data.id}  lightBg={lightBg}> */}
              <Col sm={12} md={4} lg={5}>
                  <Img fluid  
                   className="rounded-6 bg-gradient"
                  src={data.previewImg || wave} alt={data.alt}></Img>
              </Col>
              <Col >
                <div>
                  <Heading className="text-dark" to={`/about/${data.id}`}>
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
                </div>
              </Col>
              
        {/* </Row> */}
      </Row>
      ));
      

      return <>{courses && result}</>
    
 
};

export default CourseSections;
