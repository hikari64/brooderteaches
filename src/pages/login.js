import React from "react";
import SigninPage from "../components/SiginInPage";
import { AuthProvider } from "../contexts/AuthContext";

const login = () => {
  return (
    <>
      <AuthProvider>
        <SigninPage />
      </AuthProvider>
    </>
  );
};

export default login;
