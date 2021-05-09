import React from "react";

// link
import { Link } from "react-router-dom";

// css import
import "./index.css";

// boostraP IMPOTS
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// image imports
import Image from "../../../images/img-3.png";

export default function TutorLogin() {
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
                <h2 className="header">Tutor Sign In</h2>
                <p>Please sign in to continue</p>
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
  );
}
