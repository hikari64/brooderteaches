import React, { useState, useEffect, createContext } from "react";

import { auth } from "../../../firebase";

export const AdminAuthContext = createContext();

const AdminAuthProvider = (props) => {
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
    <AdminAuthContext.Provider
      value={{
        loggedIn: authState.loggedIn,
        loading: authState.loading,
        user: authState.user,
      }}
    >
      {props.children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
