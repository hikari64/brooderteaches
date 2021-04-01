import React, {useRef, useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'


const SignupPage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError ] = useState('')
    const [loading, setLoading ] = useState(false)
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/profile')
        } catch {
            setError('Failed to create account')
        }

        setLoading(false)

    }


    return (
        <div>
            <h1>Signup</h1>
            {error && <Alert variant="danger">{error}</Alert> }
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button disabled={loading} type="submit">Signup</Button>
            </Form>
            <Link to='/forgot-password'>Forgotten Password?</Link>
            Already have an account? <Link to='/login'>Login </Link>
        </div>
    );
};

export default SignupPage;