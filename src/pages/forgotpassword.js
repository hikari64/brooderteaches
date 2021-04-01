import React from 'react'
import ForgotPassword from '../components/SiginInPage/forgotpassword'
import { AuthProvider } from '../contexts/AuthContext'

const forgotpassword = () => {
    return (
        <>
        <AuthProvider>
            <ForgotPassword/>
        </AuthProvider>
        </>
    )
}

export default forgotpassword
