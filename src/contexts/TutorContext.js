import React, { useState, useContext, useEffect } from "react";
import { auth, fbapp, firestore } from "../firebase";

const TutorContext = React.createContext();

export function useAuth() {
  return useContext(TutorContext);
}
export function TutorAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const db = fbapp.firestore();
  const [userID, setuserID] = useState();

  async function getUser(params) {
    const users = firestore.collection("tutors").doc(params);

    await users.get().then(async (doc) => {
      if (doc.exists) {
        await setCurrentUser(doc.data());

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

  function signupexistinguser(existingUser) {
    const uid = existingUser.id;
    const data = {
      id: uid,
      state: 1,
      email: existingUser.email,
      isTutor: true,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
    };
    const usersRef = db.collection("tutors");
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

  function login(email, password) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(async (response) => {
        const uid = response.user.uid;

        await getUser(uid);
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
    return auth.signOut().then(() => setCurrentUser(""));
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setuserID(user.uid);
        getUser(user.uid);
      } else {
        setCurrentUser(user);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userID,
    setCurrentUser,
    signup,
    signupexistinguser,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateProfile,
    verifyUser,
  };
  return (
    <TutorContext.Provider value={value}>
      {!loading && children}
    </TutorContext.Provider>
  );
}
