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


const SigninPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      console.log("here?");
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/profile")
    } catch(error) {
      console.log("here???");
      setError(error.message);
    }

    setLoading(false);
  }

  return (
    <Container fluid>
      <Row>         <TutorAuthHeader/>
        <Col md={6} className="hide-on-mobile side-bg">
          <Container fluid className="my-auto">
            <Row className="height-full">
              <Col md={7} className="mx-auto my-auto text-center">
                <img src={Image} className="images-in-app" alt="login" />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={6}>
          <Container fluid className="my-auto">
            <Row className="height-full">
              <Col md={7} className="mx-auto my-auto text-center">
                <h2 className="header">Welcome Back!</h2>
                <p>Please sign in to continue</p>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
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
                  Don't have an account yet? <Link to="/signup">Sign Up </Link>
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
};

export default SigninPage;
