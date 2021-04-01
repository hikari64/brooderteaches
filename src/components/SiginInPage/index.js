import React, {useRef, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom";


const SigninPage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError ] = useState('')
    const [loading, setLoading ] = useState(false)
    const history = useHistory()
    

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/profile')

        } catch {
            setError('Failed to log in')
        }

        setLoading(false)

    }


    return (
        <div>
            <h1>Login</h1>
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
                
                <Button disabled={loading} type="submit">Login</Button>
            </Form>
            Don't have an account yet? <Link to='/signup'>Sign Up </Link>

        </div>
    );
};

export default SigninPage;
