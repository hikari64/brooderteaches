import React, {useRef, useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'
import Image from "../../images/img-1.png";


const ForgotPassword = () => {
    const emailRef = useRef()
    
    const { resetPassword } = useAuth()
    const [error, setError ] = useState('')
    const [message, setMessage ] = useState('')
    const [loading, setLoading ] = useState(false)
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check inbox for instructions')
        } catch {
            setError('Failed to reset password')
        }

        setLoading(false)

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
                <h2 className="header">Reset Password</h2>
                <p>Kindly enter the email you signed up with below. We will send a reset link to your mail</p>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Control
                      className="form-input"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Button
                    disabled={loading}
                    variant="primary"
                    className="primary-button"
                    type="submit"
                  >
                    Reset Password
                  </Button>
                </Form>
                <p>
                  <Link to='/login'>Back to Login</Link>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    
        // <div>
        //     <h1>Reset Password</h1>
        //     {error && <Alert variant="danger">{error}</Alert> }
        //     {message && <Alert variant="success">{message}</Alert> }
        //     <Form onSubmit={handleSubmit}>
        //         <Form.Group id="email">
        //             <Form.Label>Email</Form.Label>
        //             <Form.Control type="email" ref={emailRef} required />
        //         </Form.Group>
                
        //         <Button disabled={loading} type="submit">Reset Password</Button>
        //     </Form>
        //     <Link to='/login'>Back to Login</Link>
        // </div>
    );
};

export default ForgotPassword;
