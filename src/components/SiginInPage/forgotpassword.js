import React, {useRef, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'


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
        <div>
            <h1>Reset Password</h1>
            {error && <Alert variant="danger">{error}</Alert> }
            {message && <Alert variant="success">{message}</Alert> }
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                
                <Button disabled={loading} type="submit">Reset Password</Button>
            </Form>
        </div>
    );
};

export default ForgotPassword;
