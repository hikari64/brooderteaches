import React, { useRef, useState } from "react";
// router dom
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

// css import
import "./index.css";

// boostraP IMPOTS
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import Navbar from "../../Navbar";

// image imports
import Image from "../../../images/img-2.png";

// header import

export default function TutorSignUp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

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
  const { tutor_signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await tutor_signup(
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
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }
  return (
    <Container fluid>
      <Row>
        {" "}
        <Navbar
          toggle={toggle}
          navbar={navbar}
          changeBackground={changeBackground}
        />
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
                <br />
                <br />
                <h2 className="header">Become A Tutor</h2>
                <p>
                  Terms and conditions of being a tutor and pricing should go
                  here
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  imperdiet ligula a lacus commodo, ut tincidunt magna
                  pellentesque. Aenean eu arcu ut ligula vehicula semper id
                  sodales sapien. Vestibulum lobortis blandit sem, nec molestie
                  velit hendrerit vitae. 
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
                  Already have an account <Link to="/tutor-login" style={{color: "#100855 !important"}} >Sign In </Link>
                </p>
              </Col>
              
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
