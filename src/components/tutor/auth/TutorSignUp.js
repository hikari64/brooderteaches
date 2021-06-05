import React ,{ useRef, useState } from "react";
import { auth } from "../../../firebase";
// router dom
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";



// css import
import "./index.css";

// boostraP IMPOTS
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";



// image imports
import Image from "../../../images/img-2.png";

// header import
import {TutorAuthHeader} from "./TutorAuthHeader";


export default function TutorSignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //const  {signup}  = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    // try {
    //   setError("");
    //   setLoading(true);
    //   await signup(emailRef.current.value, passwordRef.current.value);
    //   history.push("/update-profile");
    // } catch {
    //   setError("Failed to create account");
    // }

    setLoading(false);
  }
  return (
    <Container fluid>
      <Row>      <TutorAuthHeader/>

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
                  Terms and conditions of being a tutor and pricing should go
                  here
                </p>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin imperdiet ligula a lacus commodo, ut tincidunt magna
                  pellentesque. Aenean eu arcu ut ligula vehicula semper id
                  sodales sapien. Vestibulum lobortis blandit sem, nec molestie
                  velit hendrerit vitae. Donec fringilla neque iaculis rhoncus
                  aliquam. Praesent suscipit ac nisi vel luctus. Mauris id
                  pretium justo, a imperdiet dolor. Phasellus non purus sed
                  ligula ornare porta quis ut erat. Integer ut dui maximus,
                  aliquet lectus eget, gravida ipsum. Aliquam erat volutpat.
                  Nunc id libero enim. Sed a lectus a elit scelerisque iaculis
                  sed egestas ipsum. In nunc lectus, porta consequat consectetur
                  at, fermentum ac ante. Vivamus nec ultrices felis. Nullam
                  fermentum dapibus iaculis. Praesent vel efficitur leo. Donec
                  vestibulum lobortis orci, at malesuada tellus varius in.
                  Mauris sollicitudin ante ut mi tristique imperdiet. Sed
                  efficitur ultricies nibh, a semper ex auctor et. Proin ac
                  rutrum nibh. Aenean vitae metus eget neque feugiat blandit.
                  Sed molestie maximus nulla. In bibendum sem in odio molestie
                  fermentum ut sit amet ante.
                </p>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  {/* <Form.Group>
                    <Form.Control
                      className="form-input"
                      type="name"
                      placeholder="Full Name"
                      ref={fullNameRef}
                    required/>
                  </Form.Group> */}
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
                

                <Link to="/tutor-signup">
                  <Button variant="primary" className="primary-button">
                    Continue
                  </Button>
                </Link>
                Already have an account?
                <Link to="/tutor-login">
                  <Button variant="primary" className="primary-button">
                    Login 
                  </Button>
                </Link>
                
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
