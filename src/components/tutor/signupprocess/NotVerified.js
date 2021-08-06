import React, { useRef, useState,  } from "react";

// react boostrap imports
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

// auth imports
import { useAuth } from "../../../contexts/TutorContext";

// react router dom imports
import { Link, useHistory } from "react-router-dom";

// image imports
import Image from "../../../images/img-1.png";

import { TutorAuthHeader } from "../auth/TutorAuthHeader";


const NotVerifiedPage = () => {
  
  const history = useHistory()
  const {logout} = useAuth()

 

  return (
    <Container fluid>
      <Row>
        <TutorAuthHeader/>
          <Container fluid className="my-auto">
            <Row className="height-full">

            <Col md={12} className="mx-auto my-auto text-center">
            <Row className="">
              <h4 className="header p-1 text-danger">Oops! you haven't been verified yet!</h4>
              <p>Check back again,our team will get to you shortly!</p>

             
              <Col  className="text-center ">
                <h2 className="header">Tutor Login</h2>
                
                   <Button onClick={()=>logout()}
                    className="primary-button"
                    >
                   logout
                  </Button>
                    
              </Col>
              </Row>
            </Col>
            </Row>
          </Container>
      </Row>
    </Container>
    
  );
};

export default NotVerifiedPage;
