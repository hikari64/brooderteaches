import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './TutorContext';



const TutorPublicRoute = ({component: Component, restricted, ...rest}) => {
  const { currentUser } = useAuth();

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            currentUser && restricted ?
                <Redirect to="/tutor-dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default TutorPublicRoute;