import React, { useState, useEffect } from "react";

// navbar import
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// boostrap impots
import { Container, Row, Col, Button, Form } from "react-bootstrap";

// import Custom css
import "./signupprocess.css";

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

  window.addEventListener("scroll", changeBackground);
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

      <Container className="height-half">
        <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto">
            <Form inline >
              {/* FULL NAME */}
              <Form.Group className="row">
              <Form.Label  className="col-3 align-bottom text-end text-end" >Email</Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              {/* DATE OF BIRTH */}
              <Form.Group  className="row">
                <Form.Label  className="col-3 align-bottom text-end text-end">Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  className="form-input col"
                  placeholder="Date of Birth"
                />
              </Form.Group>
              {/* ADDRESS LOCATION */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Residential Address</Form.Label>

                <Form.Control
                  className="form-input col"
                  type="name"
                  placeholder="Residential Address"
                />
              </Form.Group>
              {/* Contact */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Phone Number</Form.Label>

                <Form.Control
                  className="form-input col"
                  type="number"
                  placeholder="Phone Number"
                />
              </Form.Group>
              {/* email */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Email Address</Form.Label>
                
                <Form.Control
                  className="form-input col"
                  type="email"
                  placeholder="Email Address"
                />
              </Form.Group>
              {/* Expertise */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end text-end">Expertise</Form.Label>

                <Form.Control
                  className="form-input col"
                  type="name"
                  placeholder="Expertise"
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
      </Container>
      <Footer />
    </div>
  );
}
