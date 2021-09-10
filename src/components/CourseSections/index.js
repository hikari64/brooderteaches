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
import { Container, Row, Col, Image,Badge } from "react-bootstrap";

// firebase imports
import { fbapp } from "../../firebase";
import Spinner from '../Spinner/Spinner'
import wave from '../../images/wave.png'
import moment from 'moment';

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
                  <Subtitle className="text-dark m-2" >{data.tag}</Subtitle>
                  <Subtitle className="text-dark m-2" >{data.category}</Subtitle>

                  <Details>
                    {data.skills && data.skills.map((skill,index)=>(
                       <Badge pill bg="secondary" variant="dark" text="dark" className=" bg-secondary mx-1">
                    {skill}
                    </Badge>
                      ))}
                 
                  </Details>
                  <Details>
                    <Data>
                      <FeeIcon />{' '}GHC{' '}
                      {parseFloat(data.price).toFixed(2)}
                    </Data>
                  <Data>
                      <DurationIcon /> {data.duration}{' '}{parseInt(data.period) === 1 && "Weeks"}{parseInt(data.period) === 2 && " Months"}

                  </Data>
                  <Data>
                      <DurationIcon /> {data.duration}{' '}{parseInt(data.period) === 1 && "Weeks"}{parseInt(data.period) === 2 && " Months"}

                  </Data>
                  <Data>
                      <StartIcon />
                      {/* {data.createdAt && data.createdAt.toDate().toString()} */}
                  {data.createdAt && moment(data.createdAt.toDate(), "YYYYMMDD").fromNow()} 
         
                    </Data>
                  </Details>
                  
                  
                 <Details>
                    <CourseBtnLink to={`/preview/${data.id}`}>
                    Watch Preview
                  </CourseBtnLink>
                  
                    <CourseBtnLink to={`/register/${data.id}`}>
                    Take this Class
                    </CourseBtnLink>
                  </Details>
                   
                  

                  
                </div>
              </Col>
              
        {/* </Row> */}
      </Row>
      ));
      

      return <>{courses && result}</>
    
 
};

export default CourseSections;
