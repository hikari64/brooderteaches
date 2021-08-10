import React from "react";
import { Redirect, Route } from "react-router-dom";
import NotVerifiedPage from "../components/tutor/signupprocess/NotVerified";
import { useAuth } from "./TutorContext";

const TutorPrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return (currentUser && currentUser.isTutor) ? (
          (currentUser.verified || currentUser.state < 3)  ?
          <Component {...props} /> : <NotVerifiedPage/>
        ) : (
          <Redirect to={ currentUser ?
            "/wrong-account" :"/tutor-login"
          }/>
        );
      }}
    ></Route>
  );
};

export default TutorPrivateRoute;
