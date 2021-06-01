import React, { useState, useEffect } from "react";

// navbar import
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// boostrap impots
import { Container, Row, Col, Button, Form } from "react-bootstrap";

// import Custom css
import {SignUpH1} from "./signupElements.js";

export default function PersonalInformation(props) {
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

 const eventHandler =(event)=>{
    let val = event.target.value
    let nam = event.target.name

    props.updateData(nam,val);

  }

  window.addEventListener("scroll", changeBackground);
  return (
    <div>
        <Row className="mt-4 mb-4">
          <SignUpH1 className="text-center mb-5">
              Personal Information
          </SignUpH1>
          <Col md={8} className="mx-auto">
            
            <Form inline >
              {/* FULL NAME */}
              <Form.Group className="row">
              <Form.Label  className="col-3 align-bottom text-end text-end" >First Name</Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  name="firstName"
                  value={props.data.firstName}
                  onChange={eventHandler}

                />
              </Form.Group>
              {/* FULL NAME */}
              <Form.Group className="row">
              <Form.Label  className="col-3 align-bottom text-end text-end" >Last Name</Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  value={props.data.lastName}
                  name="lastName"
                  onChange={eventHandler}

                />
              </Form.Group>
              {/* FULL NAME */}
              <Form.Group className="row">
              <Form.Label  className="col-3 align-bottom text-end text-end" >Other Names</Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  name="otherNames"
                  value={props.data.otherNames}
                  onChange={eventHandler}
                />
              </Form.Group>
             
              {/* DATE OF BIRTH */}
              <Form.Group  className="row">
                <Form.Label  className="col-3 align-bottom text-end text-end">Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="DateofBirth"
                  className="form-input col"
                  value={props.data.DateofBirth}
                  onChange={eventHandler}

                />
              </Form.Group>
              {/* ADDRESS LOCATION */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Residential Address</Form.Label>

                <Form.Control
                  className="form-input col"
                  type="text"
                  name="Address"
                  value={props.data.Address}
                  onChange={eventHandler}

                />
              </Form.Group>
              {/* Contact */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Phone Number</Form.Label>

                <Form.Control
                  className="form-input col"
                  type="number"
                  name="Contact"
                  value={props.data.Contact}
                  onChange={eventHandler}
                />
              </Form.Group>
              {/* email */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Email Address</Form.Label>
                
                <Form.Control
                  className="form-input col"
                  type="email"
                  name="Email"
                  value={props.data.Email}
                  placeholder="Email Address"
                  onChange={eventHandler}

                />
              </Form.Group>
              {/* Expertise */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end text-end">Expertise</Form.Label>

                <Form.Control
                  className="form-input col"
                  type="text"
                  name="Expertise"
                  value={props.data.Expertise}
                  onChange={eventHandler}

                />
              </Form.Group>
              <Col className="text-center">
                <Button onClick={props.nextStep} className="primary-button text-center">
                Proceed
              </Button>
              </Col>
              
            </Form>
          </Col>
        </Row>
      
    </div>
  );
}
