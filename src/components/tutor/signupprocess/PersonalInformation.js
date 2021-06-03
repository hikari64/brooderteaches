import React, { useState, useEffect } from "react";


// boostrap impots
import { Container, Row, Col, Button, Form } from "react-bootstrap";

// import Custom css
import {SignUpH1} from "./signupElements.js";

export default function PersonalInformation(props) {
  // scroll to top
   const eventHandler =(event)=>{
    let val = event.target.value
    let nam = event.target.name

    props.updateData(nam,val);

  }

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
                  name="dateOfBirth"
                  className="form-input col"
                  value={props.data.dateOfBirth}
                  onChange={eventHandler}

                />
              </Form.Group>
              {/* ADDRESS LOCATION */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Residential Address</Form.Label>

                <Form.Control
                  className="form-input col"
                  type="text"
                  name="address"
                  value={props.data.address}
                  onChange={eventHandler}

                />
              </Form.Group>
              {/* Contact */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Phone Number</Form.Label>

                <Form.Control
                  className="form-input col"
                  type="number"
                  name="contact"
                  value={props.data.contact}
                  onChange={eventHandler}
                />
              </Form.Group>
              {/* email */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Email Address</Form.Label>
                
                <Form.Control
                  className="form-input col"
                  type="email"
                  name="email"
                  value={props.data.email}
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
                  name="expertise"
                  value={props.data.expertise}
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
