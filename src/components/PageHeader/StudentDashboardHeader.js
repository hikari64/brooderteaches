import React, { useState, useEffect } from 'react'
import { HeaderBg, Img, HeaderContainer, HeaderContent, HeaderH1, HeaderP, ImgWrapper } from "./HeaderElements";
import { courses } from '../AllCourses/CourseData';
import {useAuth} from '../../contexts/AuthContext'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import picture from "../../images/img-1.png";
import Navbar from "../Navbar/StudentNav";

import {
    ProfileImge,
    TutorLinks,
    TutorName,
    TutorLinkActive,
    TutorSubNavbar,
    TutorSubNavbarLink,
  } from "../tutor/dashboard/TutorDashboardElements";


const StudentDashboardHeader = ({ id }) => {
    const { currentUser} = useAuth();
    // console.log(currentUser.displayName)

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
    return (
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
           
            <TutorName>{currentUser.displayName}</TutorName>
            <p className="text-muted">
            {currentUser.displayName}
            </p>
            <hr/>
              <TutorLinks to={"/my-courses"}  className="p-2 m-1">Your Courses</TutorLinks>
              <TutorLinks to={"/all-courses"}  className="p-2 m-1">All Courses</TutorLinks>
  
              <TutorLinks to={"/profile"} active className="p-2 m-1">Profile</TutorLinks>
  
  
  
          </Col>
         </Container>
        </Row>
        </>
        
    )
}

export default StudentDashboardHeader
