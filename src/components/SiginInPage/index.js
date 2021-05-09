import React, { useRef, useState } from "react";

// react boostrap imports
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

// auth imports
import { useAuth } from "../../contexts/AuthContext";

// react router dom imports
import { Link, useHistory } from "react-router-dom";

// image imports
import Image from "../../images/img-1.png";

const SigninPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/profile");
    } catch {
      setError("Failed to log in");
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
                <h2 className="header">Welcome Back!</h2>
                <p>Please sign in to continue</p>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
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
                  <Link to="/tutor-dashboard">
                    <Button
                      variant="primary"
                      className="primary-button"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Link>
                </Form>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    // <div>
    //   <h1>Login</h1>
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

    //     <Button disabled={loading} type="submit">
    //       Login
    //     </Button>
    //   </Form>
    //   Don't have an account yet? <Link to="/signup">Sign Up </Link>
    //   <Link to="/forgot-password">Forgotten Password?</Link>
    // </div>
  );
};

export default SigninPage;
