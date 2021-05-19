import React, { useRef, useState } from "react";

// react bootstrap
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

// router dom
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// image imports
import Image from "../../images/img-3.png";

const SignupPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/profile");
    } catch {
      setError("Failed to create account");
    }

    setLoading(false);
  }

  return (
    <Container fluid>
      <Row>
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
                <h2 className="header">We're glad you're here</h2>
                <p>Kindly fill in the form to get you started</p>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Control
                      className="form-input"
                      type="name"
                      placeholder="Full Name"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      className="form-input"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="form-input"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="form-input"
                      type="password"
                      placeholder="Confirm password"
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
                  Already have an account <Link to="/login">Sign In </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    // <div>
    //   <h1>Signup</h1>
    //   {error && <Alert variant="danger">{error}</Alert>}
    //   <Form onSubmit={handleSubmit}>
    //     <Form.Group id="email">
    //       <Form.Label>Email</Form.Label>
    //       <Form.Control type="email" ref={emailRef} required />
    //     </Form.Group>
    //     <Form.Group id="password">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control type="password" ref={passwordRef} required />
    //     </Form.Group>
    //     <Form.Group id="password-confirm">
    //       <Form.Label>Confirm Password</Form.Label>
    //       <Form.Control type="password" ref={passwordConfirmRef} required />
    //     </Form.Group>
    //     <Button disabled={loading} type="submit">
    //       Signup
    //     </Button>
    //   </Form>
    //   <Link to="/forgot-password">Forgotten Password?</Link>
    //   Already have an account? <Link to="/login">Login </Link>
    // </div>
  );
};

export default SignupPage;
