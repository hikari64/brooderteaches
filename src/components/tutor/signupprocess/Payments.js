import React, { useState, useEffect } from "react";

// PAYSTACK BUTTON IMPORT
import { PaystackButton } from "react-paystack";

// navbar import
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// boostrap impots
import { Container, Row, Col, Button } from "react-bootstrap";

//import Icons for circle
import { BsCircle } from "react-icons/bs";

export default function Payments(props) {
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

  // PAYSTACK INTEGRATION
  const config = {
    reference: new Date().getTime(),
    currency: "GHS",
    email: "user@example.com",
    amount: 100,
    publicKey: "pk_live_2bbc47bbdc506caec19278c6f7384d1eb25ccf40",
  };

  // SUCCESSFULLY PAID
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Pay 1Ghs",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

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
            <BsCircle /> Fill in Your Personal Information {">>"} Verification{" "}
            {">>"} Payments
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
          <Col md={8} className="mx-auto text-center mt-4">
            <h4>Pay Via Mobile Money / Credit Card</h4>

            <Row>
              <Col md={8} className="mx-auto">
                <PaystackButton
                  className="paystack-button"
                  {...componentProps}
                />
              </Col>
            </Row>
            <Button onClick={props.prevStep} className="primary-button">
              Go back
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
