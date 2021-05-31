import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AdminAuthContext } from "./contexts/AdminAuthContext";

import useFetchAdmins from "./hooks/useFetchAdmins";

const AdminPrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedIn, user } = useContext(AdminAuthContext);

  const { admins, loading } = useFetchAdmins();
  let userEmail = "";

  if (loggedIn === true) {
    userEmail = user.email;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn ? (
          <Component {...props} email={userEmail} />
        ) : (
          <Redirect to="/admin" />
        );
      }}
    ></Route>
  );
};

export default AdminPrivateRoute;
