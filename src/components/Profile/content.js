import React, { useState } from 'react'
import { Alert, Button } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


const ProfileContent = () => {
    const [error, setError ] = useState('')
    const {currentUser, logout}  = useAuth()
    const history = useHistory();
   
    async function handleLogout() {
        setError('')

        try{
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to logout')
        }
    }
    return (

        <div>
            Profile
            <br/>
            <strong>Email: {currentUser.email}</strong><br/>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Link to='/update-profile'>Update Profile</Link>
            <Button variant='link' onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default ProfileContent
