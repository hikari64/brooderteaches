import React, { useRef, useState }  from "react";

// link
import { Link, useHistory } from "react-router-dom";

// css import
import "./index.css";
import { useAuth } from "../../../contexts/AuthContext";

// boostraP IMPOTS
import { Container, Row, Alert, Col, Form, Button } from "react-bootstrap";
import Navbar from "../../Navbar";

// image imports
import Image from "../../../images/img-3.png";

export default function TutorLogin() {
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
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { tutor_login } = useAuth()
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
        setError("");
        setLoading(true);
        console.log("here?");
        await tutor_login(emailRef.current.value, passwordRef.current.value);
        history.push("/tutor-dashboard")
      } catch (error) {
        console.log("here???");
        setError(error.message);
      }
  
      setLoading(false);
    }

  return (
    <Container fluid>
      <Row> <Navbar />
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
                  Don't have an account yet? <Link to="/tutor-signup">Sign Up </Link>
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
