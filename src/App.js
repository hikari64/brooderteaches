import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

// STUDENT & GENERAL PAGES
import Home from "./pages";
import Courses from "./pages/courses";
import CoursePage from "./pages/coursepage";
import CoursePreview from "./pages/coursepreview";
import RegisterForCourse from "./pages/registerforcourse";
import { AuthProvider } from "./contexts/AuthContext";
import login from "./pages/login";
import signup from "./pages/signup";
import Profile from "./pages/profile";
import PrivateRoute from "./contexts/PrivateRoute";
import ProfileUpdate from "./pages/updateprofile";
import forgotpassword from "./pages/forgotpassword";

// ADMINISTRATOR COMPONENTS
import AdminLogin from "./components/admin/AdminLogin";
import AdminAuthProvider from "./components/admin/contexts/AdminAuthContext";
import Dashboard from "./components/admin/adminPages/Dashboard";
import AdminPrivateRoute from "./components/admin/AdminPrivateRoute";
import Students from "./components/admin/adminPages/Students";
import Tutors from "./components/admin/adminPages/Tutors";

// TUTOR COMPONENTS
import TutorLogin from "./components/tutor/auth/TutorLogin";
import TutorSignUp from "./components/tutor/auth/TutorSignUp";
import Process from "./components/tutor/signupprocess/Process";
import TutorDashboard from "./components/tutor/dashboard/TutorDashboard";
import TutorCreateCourse from "./components/tutor/courses/TutorCreateCourse";
import TutorProfile from "./components/tutor/Profile/TutorProfile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AdminAuthProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={login} />
            <Route path="/signup" component={signup} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/update-profile" component={ProfileUpdate} />
            <Route path="/forgot-password" component={forgotpassword} />
            <Route path="/courses" component={Courses} />
            <Route path="/about/:id" component={CoursePage} />
            <Route path="/preview/:id" component={CoursePreview} />
            <Route path="/register/:id" component={RegisterForCourse} />
            {/* <PrivateRoute path="/register/:id" component={RegisterForCourse} /> */}

            {/* ADMIN Routes */}
            <Route path="/admin" component={AdminLogin} />
            <AdminPrivateRoute path="/dashboard" component={Dashboard} />
            <AdminPrivateRoute path="/students" component={Students} />
            <AdminPrivateRoute path="/tutors" component={Tutors} />

            {/* TUTOR ROUTES */}
            <Route path="/tutor-login" component={TutorLogin} />
            <Route path="/tutor" component={TutorSignUp} />
            <Route path="/tutor-signup" component={Process} />
            <Route path="/tutor-dashboard" component={TutorDashboard} />
            <Route path="/tutor-courses" component={TutorDashboard} />
            <Route path="/tutor-create-course" component={TutorCreateCourse} />
            <Route path="/tutor-profile" component={TutorProfile} />
          </Switch>
        </AdminAuthProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
