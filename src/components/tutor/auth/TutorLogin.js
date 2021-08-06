import React, { useEffect, useRef, useState }  from "react";

// link
import { Link, useHistory } from "react-router-dom";


import { useAuth } from "../../../contexts/TutorContext";
// css import
import "./index.css";
// boostraP IMPOTS
import { Container, Row, Alert, Col, Form, Button } from "react-bootstrap";

// header import
import { TutorAuthHeader } from "./TutorAuthHeader";

// image imports
import Image from "../../../images/img-3.png";
import { fbapp } from "../../../firebase";
import useIsTutor from "../hooks/useIsTutor";

export default function TutorLogin() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [response, setTrue] = useState(false);
    const { login, userID } = useAuth()
    const history = useHistory()
    const db = fbapp.firestore()
  
    

    // useEffect(()=>{
      
    // },[userID])
     

    
    async function HandleSubmit(e) {
      e.preventDefault();
        try {
        setError("");
        setLoading(true);
        console.log("here?");
        await login(emailRef.current.value, passwordRef.current.value);
        history.push("/tutor-dashboard")
        console.log(".........................here?");


      
      } catch (error) {
        console.log("here???");
        setError(error.message);
      }
      
     
  
      setLoading(false);
    }

  return (
    <Container fluid>
      <Row>
      <TutorAuthHeader/>
         {/* <Navbar /> */}
        <Col md={6} className="hide-on-mobile side-bg">
          <Container fluid className="my-auto">
            <Row className="height-full">
              <Col md={7} className="mx-auto my-auto text-center">
                <img src={Image} className="images-in-app" alt="login" />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={6} className="bg-wave">
          <Container fluid className="my-auto">
            <Row className="height-full">
              <Col md={7} className="mx-auto my-auto text-center">
                <h2 className="header">Tutor Sign In</h2>
                <p>Please sign in to continue</p>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={HandleSubmit}>
                  <Form.Group>
                    <Form.Control
                      className="form-input"
                      type="email"
                      placeholder="Enter email"
                      ref={emailRef} required 
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="form-input"
                      type="password"
                      placeholder="Password"
                      ref={passwordRef} required 
                    />
                  </Form.Group>

                  <Button
                    disabled={loading}
                    variant="primary"
                    className="primary-button"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
                <p>
                  Don't have an account yet? <Link to="/tutor">Sign Up </Link>
                </p>
                <p>
                  <Link to="/forgot-password">Forgotten Password?</Link>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
