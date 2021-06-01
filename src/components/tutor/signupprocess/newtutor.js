import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

// navbar import
import Navbar from "../../Navbar/index";
import Footer from "../../Footer";

// boostrap imports
import { Container, Row, Col, Button } from "react-bootstrap";

//import image 
import picture from "../../../images/code.jpg";

//import Styled ELement from dashboard elements
import {
  ProfileImge,
  TutorLinks,
  TutorName,
  TutorLinkActive,
  TutorSubNavbar,
  TutorSubNavbarLink,
  Circle,
  NewCourseTabHeaders
} from "../dashboard/TutorDashboardElements";

// IMPORT STYLED ELEMENTS for this page
import {SignUpH1,IndicatorHeader,IndicatorSubHeader} from "./signupElements.js";
//import Courses Sections Component from courses

  import CourseSections from "../../CourseSections/index"
import { courses } from "../../../mock/mock";

//import Create New Course Processes

import Process from "./Process";

export default function NewTutor(props) {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // NAVBAR CONTROLS
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);


  // INDICATOR HOOKS

const [indicator, SetIndicator] = useState(1)
const [oneIndicator, SetOneIndicator] = useState(true)
const [twoIndicator, SetTwoIndicator] = useState(false)
const [threeIndicator, SetThreeIndicator] = useState(false)

const setLevelCheck = (levelKey) =>{
     
  SetTwoIndicator(false)
  SetOneIndicator(false)
  SetThreeIndicator(false)

  SetOneIndicator(levelKey > 0 ? true: false )
  SetTwoIndicator(levelKey > 1 ? true: false )
  SetThreeIndicator(levelKey > 2 ? true: false ) 
  
  
}

const ProcessIndicator =(newindicator)=>{
  
  var data = newindicator;      

      SetIndicator(data)
      setLevelCheck(data);
      
     
    
}




  return (
    
    <div fluid className="height-full">
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
      <Row className="page-header">
        <Col md={10} className="mx-auto text-center my-auto">
          <h1>Personal Information</h1>
          <p className="text-muted">
            Fill in Your Personal Information {">>"} Verification {">>"} Payments
          </p>
        </Col>
      </Row>
      <TutorSubNavbar>
        <Container className="">
          <Container className="container  p-4 row">
          <Col>
          <Row>
            <Circle active={oneIndicator} className="rounded-circle col-2"/>
            <NewCourseTabHeaders className="col my-auto">
             <IndicatorHeader>Step One</IndicatorHeader> 
              <IndicatorSubHeader>Personal Information</IndicatorSubHeader>
              </NewCourseTabHeaders>
            </Row></Col>
            <Col>
              <Row>
                <Circle active={twoIndicator}  className="rounded-circle col-2"/>
                <NewCourseTabHeaders className="col my-auto">
                  <IndicatorHeader>Step Two</IndicatorHeader> 
                  <IndicatorSubHeader>Verification</IndicatorSubHeader>
                </NewCourseTabHeaders> 
              </Row>
            </Col>
            <Col>
              <Row>
                <Circle active={threeIndicator}  className="rounded-circle col-2"/>
                <NewCourseTabHeaders className="col my-auto">
                  <IndicatorHeader>Step Three</IndicatorHeader> 
                  <IndicatorSubHeader>Complete Registrationn</IndicatorSubHeader>
                </NewCourseTabHeaders>
              </Row>
            </Col>
            
          </Container>
        </Container>
     
      </TutorSubNavbar>
      <Container className="height-half">

        <Row className="mt-4 mb-4">
          <Col md={12} className="mx-auto">
            <Process ProcessIndicator={ProcessIndicator}/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
