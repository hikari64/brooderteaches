import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

//import image 
import picture from '../../../images/code.jpg';

// navbar import
import Navbar from "../../Navbar/TutorNav";
import Footer from "../../Footer";

// boostrap imports
import { Container, Row, Col, Button } from "react-bootstrap";

//import ELement for this page
import {
  ProfileImge,
  TutorLinks,
  TutorName,
  TutorLinkActive,
  TutorSubNavbar,
  TutorSubNavbarLink,
  CourseHeaderContainer
} from "./TutorDashboardElements";


export default function TutorCourseHeader(props){
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
    return(
        <>
        
            <Navbar
                toggle={toggle}
                navbar={navbar}
                changeBackground={changeBackground}
                />
            <CourseHeaderContainer img={picture} className="page-header " >
                <Container className="row mt-5 p-5 mx-auto">
                
                <Container md={7} className="text-center mx-auto my-auto ">
                
                <TutorName className="text-center">{props.course.title}</TutorName>
                <p className="text-muted">
                {props.course.tag}
                </p>
               



                </Container>
            </Container>
            </CourseHeaderContainer>
            
            
        </>
    )
}

