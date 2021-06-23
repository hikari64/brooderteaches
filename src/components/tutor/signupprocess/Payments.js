import React, { useState, useEffect } from "react";

// PAYSTACK BUTTON IMPORT
import { PaystackButton } from "react-paystack";

// boostrap impots
import { Container, Row, Col, Button } from "react-bootstrap";

// IMPORT STYLED ELEMENTS
import { SignUpH1 } from "./signupElements.js";

export default function Payments(props) {
 

  // NAVBAR CONTROLS
  const [isOpen, setIsOpen] = useState(false);

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
    <div>
      <Row className="mt-4 mb-4">
        <SignUpH1 className="text-center mb-5">Payments</SignUpH1>
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
              <PaystackButton className="paystack-button" {...componentProps} />
            </Col>
          </Row>
          <Button onClick={props.prevStep} className="primary-button">
            Go back
          </Button>
        </Col>
      </Row>
    </div>
  );
}
