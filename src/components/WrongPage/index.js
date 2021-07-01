import React, { useRef, useState,  } from "react";

// react boostrap imports
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

// auth imports
import { useAuth } from "../../contexts/AuthContext";

// react router dom imports
import { Link, useHistory } from "react-router-dom";

// image imports
import Image from "../../images/img-1.png";

import { TutorAuthHeader } from "../tutor/auth/TutorAuthHeader";


const WrongAccountPage = () => {
  
  const history = useHistory()

 

  return (
    <Container fluid>
      <Row>
        <TutorAuthHeader/>
          <Container fluid className="my-auto">
            <Row className="height-full">

            <Col md={12} className="mx-auto my-auto text-center">
            <Row className="">
              <h2 className="header p-1 text-danger">Oops! you logged into the wrong area!</h2>
              <p>Please choose select right acount</p>

              <Col md={6} className="text-center">   
              <h2 className="header">Student Login</h2>
                  <Link to="/login">
                   <Button 
                    className="primary-button"
                    >
                    Sign In as a student
                  </Button>
                    </Link>
              </Col>
              <Col md={6} className="text-center ">
                <h2 className="header">Tutor Login</h2>
                <Link to="/tutor-login">
                   <Button 
                    className="primary-button"
                    >
                    Sign In as a tutor
                  </Button>
                    </Link>
              </Col>
              </Row>
            </Col>
            </Row>
          </Container>
      </Row>
    </Container>
    
  );
};

export default WrongAccountPage;
