import React, { useState, useEffect } from "react";

// navbar import
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// boostrap impots
import { Container, Row, Col, Button } from "react-bootstrap";

export default function TutorDashboard(props) {
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
          <h1>Payments</h1>
          <p className="text-muted">
            Fill in Your Personal Information >> Verification >> Payments
          </p>
        </Col>
      </Row>

      <Container className="height-half">
        <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto text-center">
            <h3>Congratulations, you're almost done</h3>
            <p>
              You're almost on your way to becoming a tutor. You are required to
              pay a registration fee of Ghs100 to complete your registration.
              After this one time fee, you can create unlimited courses
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
