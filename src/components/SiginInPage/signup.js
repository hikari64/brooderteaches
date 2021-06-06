import React, { useRef, useState } from "react";

// react bootstrap
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

// router dom
import { Link, useHistory } from "react-router-dom";

// image imports
import Image from "../../images/img-3.png";

import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar"


const SignupPage = () => {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  };

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
      setActive(!isActive);
  };

  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
      if(window.scrollY >=150){
          setNavbar(true);
      } else {
          setNavbar(false);
      }
  }
  
  window.addEventListener('scroll', changeBackground)
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef= useRef()
  const lastNameRef = useRef()
  // const usernameRef = useRef()
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [ref, setRef] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // const db = firestore.firestore();
  const {signup, verifyUser, login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value,
                    lastNameRef.current.value);
      // console.log("completed signup, going to login")
      //               await login(emailRef.current.value, passwordRef.current.value);
      //               console.log("completed login, going to verify")
                   
      //               await verifyUser();
          history.push("/login")
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  return (
    <Container fluid>
      <Row> <Navbar toggle={toggle} navbar={navbar} changeBackground={changeBackground} />
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
              <Col md={7} className="mx-auto my-auto text-center"><br/>
                <h2 className="header">We're glad you're here</h2>
                <p>Kindly fill in the form to get you started</p>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
              <Form.Group className="row">
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    required 
                    ref={firstNameRef}
                    placeholder = "Enter first name"  
                  />
              </Form.Group>
              <Form.Group className="row">
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    required
                    ref={lastNameRef}
                    placeholder = "Enter last name"  
                  />
                </Form.Group>
                  <Form.Group>
                    <Form.Control
                      className="form-input"
                      type="email"
                      placeholder="Enter email"
                      ref={emailRef}
                    required/>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="form-input"
                      type="password"
                      placeholder="Password"
                      ref={passwordRef}
                   required />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="form-input"
                      type="password"
                      placeholder="Confirm password"
                      ref={passwordConfirmRef} required 
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
