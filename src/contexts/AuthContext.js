import React, { useState, useContext, useEffect } from "react";
import { auth, fbapp, firestore } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [ufrom, setuFrom] = useState();
  const [userProfile, setUserProfile] = useState(); // puting user profile here to get user data from db
  const [loading, setLoading] = useState(true);
  const db = fbapp.firestore();
  const [userID, setuserID] = useState();

  async function getUser(params) {
    const users = firestore.collection("students").doc(params);

    await users.get().then((doc) => {
      if (doc.exists) {
        setUserProfile(doc.data());

        console.log("user data: fetched", doc.data());
      } else {
        // doc.data() will be undefined in this case

        console.log("No such document!");
        return;
      }
    });
  }
  function signup(email, password, firstName, lastName) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          password,
          firstName,
          lastName,
        };
        const usersRef = db.collection("students");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            console.log("succes? You can login now");
            setuserID(uid);
            // toast.show("Success!", {type: 'success'});
            // navigation.navigate('Login', { user: data })
          })
          .catch((error) => {
            console.log("failed?", error.message);
            // toast.show(error.message, {type: 'danger'});
          });
      });
    // .catch((error) => {
    //     console.log("error?", error.message)
    // // toast.show(error.message, {type: 'danger'});
    // });
  }

  function signupexistinguser(existingUser) {
    const uid = existingUser.id;
    const data = {
      id: uid,

      email: existingUser.email,

      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
    };
    const usersRef = db.collection("students");
    usersRef
      .doc(uid)
      .set(data)
      .then(() => {
        console.log("succes? You can login now");
        setuserID(uid);
      })
      .catch((error) => {
        console.log("failed?", error.message);
      });
  }

  function tutor_signup(email, password, firstName, lastName) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          state: 1,
          email,
          isTutor: true,
          firstName,
          lastName,
        };
        const usersRef = db.collection("tutors");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            console.log("succes? You can login now");
            setuserID(uid);
            // toast.show("Success!", {type: 'success'});
            // navigation.navigate('Login', { user: data })
          })
          .catch((error) => {
            console.log("failed?", error.message);
            // toast.show(error.message, {type: 'danger'});
          });
      });
    // .catch((error) => {
    //     console.log("error?", error.message)
    // // toast.show(error.message, {type: 'danger'});
    // });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
    // .then((response) => {
    //     const uid = response.user.uid

    //     const checkIfStudent = db.collection('students').doc(uid)
    //     checkIfStudent.get().then((doc) => {
    //         if (doc.exists) {
    //             console.log("truly a student");
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("not a student");
    //         }
    //     }).catch((error) => {
    //         console.log("Error getting document:", error);
    //     });
    // })
  }

  function tutor_login(email, password) {
    return auth.signInWithEmailAndPassword(email, password).then((response) => {
      const uid = response.user.uid;

      const checkIfStudent = db.collection("tutors").doc(uid);
      checkIfStudent
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("truly a tutor");
          } else {
            // doc.data() will be undefined in this case
            console.log("not a student");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    });
  }

  function verifyUser() {
    return currentUser.sendEmailVerification();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function updateProfile(
    displayName,
    photoURL,
    uid,
    email,
    password,
    location,
    firstName,
    lastName,
    otherNames,
    dob,
    contact
  ) {
    console.log("within profile update", uid, photoURL);
    return currentUser
      .updateProfile({ displayName, photoURL })
      .then((response) => {
        // const uid = response.user.uid
        const data = {
          photoURL,
          email,
          // password,
          firstName,
          lastName,
          displayName,
          location,
          otherNames,
          dob,
          contact,
        };
        const usersRef = db.collection("students");
        usersRef
          .doc(uid)
          .update(data)
          .then(() => {
            console.log("successfully updated this guy");
            // toast.show("Success!", {type: 'success'});
            // navigation.navigate('Login', { user: data })
          })
          .catch((error) => {
            console.log("failed?", error.message);
            // toast.show(error.message, {type: 'danger'});
          });
      });
    // .catch((error) => {
    //     console.log("error?", error.message)
    // // toast.show(error.message, {type: 'danger'});
    // });
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        setuserID(user.uid);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userID,
    userProfile,
    ufrom,
    setuFrom,
    signup,
    signupexistinguser,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateProfile,
    verifyUser,
    tutor_login,
    tutor_signup,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
