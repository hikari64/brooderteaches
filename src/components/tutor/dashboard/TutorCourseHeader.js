import React, { useState, useEffect } from "react";

//import image 
import picture from '../../../images/code.jpg';

// navbar import
import Navbar from "../../Navbar/TutorNav";

// boostrap imports
import { Container } from "react-bootstrap";

//import ELement for this page
import {
 
  TutorName,
 
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
            <CourseHeaderContainer img={props.course.previewImg} className="page-header " >
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

