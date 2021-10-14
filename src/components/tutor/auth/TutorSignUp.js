import React, { useRef, useState } from "react";
// router dom
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/TutorContext";

// css import
import "./index.css";

// boostraP IMPOTS
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";

import { firestore } from "../../../firebase";

// image imports
import Image from "../../../images/img-2.png";
import { TutorAuthHeader } from "./TutorAuthHeader";

// header import

export default function TutorSignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  // const usernameRef = useRef()
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // const db = firestore.firestore();
  const { signup, signupexistinguser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      const students = await firestore.collection("students").get();
      const tutors = await firestore.collection("tutors").get();
      const snapshot = students.docs.map((doc) => doc.data());
      const tutorsnapshot = tutors.docs.map((doc) => doc.data());
      setError("");
      setLoading(true);
      console.log(`students[0]`, snapshot[0]);
      const existingUser =
        snapshot.find((user) => user.email === emailRef.current.value) || null;
      console.log(`existingUser`, existingUser);

      const existingTutor =
        tutorsnapshot.find((user) => user.email === emailRef.current.value) ||
        null;
      console.log(`existingTutor`, existingTutor);
      if (existingUser && !existingTutor) {
        await signupexistinguser(existingUser);
        history.push("/tutor-login");
      } else {
        await signup(
          emailRef.current.value,
          passwordRef.current.value,
          firstNameRef.current.value,
          lastNameRef.current.value
        );
        // console.log("completed signup, going to login")
        //               await login(emailRef.current.value, passwordRef.current.value);
        //               console.log("completed login, going to verify")

        //               await verifyUser();
        history.push("/tutor-login");
      }
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }
  return (
    <Container fluid>
      <Row>
        {" "}
        <TutorAuthHeader />
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
              <Col md={10} className="mx-auto my-auto text-center container">
                <h2 className="header">Become A Tutor</h2>
                <p>
                  Kindly fill this form to get started on your registration as a
                  tutor.
                </p>

                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="row">
                    <Form.Control
                      className="form-input col lg"
                      type="text"
                      required
                      ref={firstNameRef}
                      placeholder="Enter first name"
                    />
                  </Form.Group>
                  <Form.Group className="row">
                    <Form.Control
                      className="form-input col lg"
                      type="text"
                      required
                      ref={lastNameRef}
                      placeholder="Enter last name"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      className="form-input"
                      type="email"
                      placeholder="Enter email"
                      ref={emailRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="form-input"
                      type="password"
                      placeholder="Password"
                      ref={passwordRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="form-input"
                      type="password"
                      placeholder="Confirm password"
                      ref={passwordConfirmRef}
                      required
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
                  Already have an account{" "}
                  <Link
                    to="/tutor-login"
                    style={{ color: "#100855 !important" }}
                  >
                    Sign In{" "}
                  </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
