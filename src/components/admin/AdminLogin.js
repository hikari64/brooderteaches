import React, { useState, useEffect, useContext } from "react";

// link
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";

// css import
import "./index.css";

// auth import
import { auth } from "../../firebase";

// import context
import { AdminAuthContext } from "./contexts/AdminAuthContext";

// boostraP IMPOTS
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// image imports
import Image from "../../images/img-3.png";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, loggedIn, user } = useContext(AdminAuthContext);

  // Handle Login Process
  const handleLogin = async () => {
    try {
      const credential = auth.signInWithEmailAndPassword(email, password);
      console.log("auth credential", credential);
    } catch (error) {
      console.log("error: ", error.message);
    }
  };

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

                <Form>
                  <Form.Group>
                    <Form.Control
                      className="form-input-official"
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="form-input-official"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    className="primary-button"
                    onClick={handleLogin}
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
