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
import TutorDashboardHeader from "../dashboard/TutorDashboardHeader";
import useFetchTutorsById from "../hooks/useFetchTutorById";
import { useAuth } from "../../../contexts/AuthContext";

export default function TutorProfile(props) {
  const { userID } = useAuth ()

//const [Id, setId] = useState('1267283472364');
const { loading, tutors } = useFetchTutorsById(userID);
  return (
    <div fluid className="height-full">
      <TutorDashboardHeader tutors={tutors}/>
      
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
                    value={tutors.firstName}
                    placeholder=""
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Last Name</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    value={tutors.lastName}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Other Names</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    value={tutors.otherNames}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Date of Birth</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="date"
                    placeholder=""
                    value={tutors.dateOfBirth}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Address/Location</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    value={tutors.address}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Contact</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    value={tutors.contact}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Email</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    value={tutors.email}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Expertise</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    value={tutors.expertise}

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
