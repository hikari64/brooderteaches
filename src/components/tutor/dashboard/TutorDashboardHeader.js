import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

//import image 
import picture from "../../../images/code.jpg";

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
} from "./TutorDashboardElements";


export default function TutorDashboardHeader(props){
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
            <Row className="page-header " >
                <Container className="row mt-5 p-5">
                <Col md={3} className="text-end my-auto hide-on-mobile">
                
                    <img  
                    width="150"
                    height="150"
                    src={picture} alt="myimage" 
                    className="rounded-circle" />

            
                </Col>
                <Col md={7} className=" text-start my-auto ">
                
                <TutorName>{props.tutors.firstName} {props.tutors.lastName}</TutorName>
                <p className="text-muted">
                {props.tutors.email}
                </p>
                <hr/>
                    <TutorLinks to={"/tutor-courses"} active className="p-2 m-1">Your Courses</TutorLinks>
                    <TutorLinks to={"/tutor-create-course"} className="p-2 m-1">Create New Course</TutorLinks>

                    <TutorLinks to={"/tutor-profile"} className="p-2 m-1">Edit Profile</TutorLinks>



                </Col>
            </Container>
            </Row>
            
            
        </>
    )
}

