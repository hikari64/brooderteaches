import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

// navbar import
import Navbar from "../../Navbar/TutorNav";
import Footer from "../../Footer";

// boostrap imports
import { Container, Row, Col, Button, Form } from "react-bootstrap";

//import image 
import picture from "../../../images/code.jpg";

//import ELement for this page
import {
  ProfileImge,
  TutorLinks,
  TutorName,
  TutorLinkActive,
  TutorSubNavbar,
  TutorSubNavbarLink,
} from "../dashboard/TutorDashboardElements";

//import Courses Sections Component from courses

  import CourseSections from "../../CourseSections/index"
import { courses } from "../../../mock/mock";

export default function TutorProfile(props) {
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
  return (
    <div fluid className="height-full">
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
         
          <TutorName>Winston Brown</TutorName>
          <p className="text-muted">
          brownwinston@gmail.com
          </p>
          <hr/>
            <TutorLinks to={"/tutor-courses"}  className="p-2 m-1">Your Courses</TutorLinks>
            <TutorLinks to={"/tutor-create-course"}  className="p-2 m-1">Create New Course</TutorLinks>

            <TutorLinks to={"/tutor-profile"} active className="p-2 m-1">Edit Profile</TutorLinks>



        </Col>
       </Container>
      </Row>
      <TutorSubNavbar>
        <Container className="mx-5">
          <Container className="container mx-5 p-4 ">
            <TutorSubNavbarLink to={"/tutor-courses"}  active className="p-2 m-1">Upcoming</TutorSubNavbarLink>
              <TutorSubNavbarLink to={"/tutor-courses"} className="p-2 m-1">In Session</TutorSubNavbarLink>
              <TutorSubNavbarLink to={"/tutor-courses"} className="p-2 m-1">Ended</TutorSubNavbarLink>
          </Container>
        </Container>
     
      </TutorSubNavbar>
      <Container className="height-half">

        <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto">
          <Form inline >
              {/* COURSE TITLE */}
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >First Name</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Last Name</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Other Names</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Date of Birth</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="date"
                    placeholder=""
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Address/Location</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Contact</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Email</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Expertise</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                  />
              </Form.Group>
             
              <Col className="text-center">
                <Button onClick={props.nextStep} className="primary-button text-center">
                Update
              </Button>
              </Col>
              
            </Form>
         
            </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
