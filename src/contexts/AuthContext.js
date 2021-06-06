import React, { useState, useContext, useEffect } from "react";
import { auth, fbapp } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider ({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const db = fbapp.firestore()
    const [userID, setuserID] = useState()
    
    function signup(email, password, firstName, lastName ) {
        return auth.createUserWithEmailAndPassword(email, password)
                    .then((response) => {
                        const uid = response.user.uid
                        const data = {
                            id: uid,
                            email,
                            password,
                            firstName,
                            lastName
                        };
                        const usersRef = db.collection('students')
                        usersRef
                            .doc(uid)
                            .set(data)
                            .then(() => {
                                console.log("succes? You can login now")
                                setuserID(uid)
                            // toast.show("Success!", {type: 'success'});
                            // navigation.navigate('Login', { user: data })
                            })
                            .catch((error) => {
                                console.log("failed?", error.message)
                            // toast.show(error.message, {type: 'danger'});
                            });
                    })
                    // .catch((error) => {
                    //     console.log("error?", error.message)
                    // // toast.show(error.message, {type: 'danger'});
                    // });
                }

    function tutor_signup(email, password, firstName, lastName ) {
        return auth.createUserWithEmailAndPassword(email, password)
                    .then((response) => {
                        const uid = response.user.uid
                        const data = {
                            id: uid,
                            email,
                            password,
                            firstName,
                            lastName
                        };
                        const usersRef = db.collection('tutors')
                        usersRef
                            .doc(uid)
                            .set(data)
                            .then(() => {
                                console.log("succes? You can login now")
                                setuserID(uid)
                            // toast.show("Success!", {type: 'success'});
                            // navigation.navigate('Login', { user: data })
                            })
                            .catch((error) => {
                                console.log("failed?", error.message)
                            // toast.show(error.message, {type: 'danger'});
                            });
                    })
                    // .catch((error) => {
                    //     console.log("error?", error.message)
                    // // toast.show(error.message, {type: 'danger'});
                    // });
                }


    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function tutor_login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }


    function verifyUser(){
        return currentUser.sendEmailVerification()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function updateProfile(displayName, photoURL, uid, email, password, location, firstName, lastName, otherNames, dob, contact){
        console.log("within profile update", uid, photoURL);
        return currentUser.updateProfile({displayName, photoURL})
            .then((response) => {
            // const uid = response.user.uid
            const data = {
                photoURL,
                email,
                password,
                firstName,
                lastName,
                displayName, location,
                otherNames, dob, contact
            };
            const usersRef = db.collection('students')
            usersRef
                .doc(uid)
                .update(data)
                .then(() => {
                    console.log("successfully updated this guy")
                // toast.show("Success!", {type: 'success'});
                // navigation.navigate('Login', { user: data })
                })
                .catch((error) => {
                    console.log("failed?", error.message)
                // toast.show(error.message, {type: 'danger'});
                });
        })
        // .catch((error) => {
        //     console.log("error?", error.message)
        // // toast.show(error.message, {type: 'danger'});
        // });
    
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            if (user) {
                setuserID(user.uid)
            }
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser, userID,
        signup, login, logout, resetPassword, updateEmail, updatePassword, updateProfile,
        verifyUser, tutor_login, tutor_signup
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
