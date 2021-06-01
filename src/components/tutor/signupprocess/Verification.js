import React, { useState, useEffect } from "react";

// navbar import
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// boostrap impots
import { Container, Row, Button, Col } from "react-bootstrap";

// material ui imports
import { DropzoneArea } from "material-ui-dropzone";

import {SignUpH1} from "./signupElements.js";


export default function Verification(props) {
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

 const handleChange=(File)=>{
    let val = File[0]
    let nam = "VerificationID"

    props.updateData(nam,val);

  }

  window.addEventListener("scroll", changeBackground);
  return (
    <div>
    
        <Row className="mt-4 mb-4 text-center">
          <SignUpH1 className="text-center mb-5">
            Verification
          </SignUpH1>
          
          <Col md={8} className="mx-auto">
            <h5 className="mb-4 mt-2">
              *Upload any valid National Identification Card for successful
              verification
            </h5>
            <DropzoneArea onChange={handleChange} />
            <Button onClick={props.prevStep} className="primary-button">
              Go Back
            </Button>
            <Button onClick={props.nextStep} className="primary-button">
              Proceed
            </Button>
          </Col>
        </Row>
    </div>
  );
}

