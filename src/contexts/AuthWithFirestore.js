import React, { useState, useEffect, createContext } from "react";

import { auth } from "../firebase";

export const AuthWithFirestore = createContext();

const AuthWithFirestoreProvider = (props) => {
  const [authState, setAuthState] = useState({
    loading: true,
    loggedIn: false,
    user: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthState({ loading: false, loggedIn: Boolean(user), user: user });
    });
  }, []);

  return (
    <AuthWithFirestore.Provider
      value={{
        loggedIn: authState.loggedIn,
        loading: authState.loading,
        user: authState.user,
      }}
    >
      {props.children}
    </AuthWithFirestore.Provider>
  );
};

export default AuthWithFirestoreProvider;
