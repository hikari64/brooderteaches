import React from 'react'
import SignupPage from '../components/SiginInPage/signup'
import { AuthProvider } from '../contexts/AuthContext'

const signup = () => {
    return (
        <>
        <AuthProvider>
            <SignupPage/>
        </AuthProvider>
        </>
    )
}

export default signup
