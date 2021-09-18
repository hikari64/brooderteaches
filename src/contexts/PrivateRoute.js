import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser,setuFrom } = useAuth();
  // let location = useLocation()

  return (
    <Route
      {...rest}
      render={(props) => {
        setuFrom(props.location.pathname)

        return currentUser ? (
          <Component {...props} />
        ) : (

          <Redirect to={{
            pathname: "/login",
            state: { from: props.location.pathname }
          }} />
        
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
