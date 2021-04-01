import React from 'react'
import UpdateProfile from '../components/SiginInPage/updateProfile'
import { AuthProvider } from '../contexts/AuthContext'

const ProfileUpdate = () => {
    return (
        <>
        <AuthProvider>
            <UpdateProfile/>
        </AuthProvider>
        </>
    )
}

export default ProfileUpdate
