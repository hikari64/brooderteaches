import React, { useState, useContext } from "react";

import { Redirect } from "react-router-dom";

// css import
import "./index.css";

// auth import
import { auth } from "../../firebase";

// import context
import { AdminAuthContext } from "./contexts/AdminAuthContext";

// boostraP IMPOTS
import { Container, Row, Col, Alert, Form, Button } from "react-bootstrap";

// image imports
import Image from "../../images/img-3.png";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { loggedIn, user } = useContext(AdminAuthContext);

  // Handle Login Process
  // async function handleLogin(e) {
  //   e.preventDefault();
  //   try {
  //     const credential = auth.signInWithEmailAndPassword(email, password);
  //     console.log("auth credential", credential);
  //     setError(error.message);
  //   } catch (error) {
  //     setError(error.message);
  //     console.log("error: ", error.message);
  //   }
  // }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  // CHECKS TO ADMIN COLLECTION

  if (loggedIn === true) {
    return <Redirect to="/dashboard" />;
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
                <h2 className="header">Administrator </h2>
                <p>Please enter your credentials to continue </p>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLogin}>
                  <Form.Group>
                    <Form.Control
                      className="form-input-official form-input"
                      type="email"
                      required
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="form-input-official form-input"
                      type="password"
                      required
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className="primary-button"
                    disabled={loading}
                    // onClick={handleLogin}
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
