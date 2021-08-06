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
import AllCourses from './pages/Students/AllCourses';
import MyCourses from './pages/Students/MyCourses';

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
import NewTutor from "./components/tutor/signupprocess/newtutor";
import TutorDashboard from "./components/tutor/dashboard/TutorDashboard";
import TutorCreateCourse from "./components/tutor/courses/TutorCreateCourse";
import TutorProfile from "./components/tutor/Profile/TutorProfile";
import TutorPreviewCourse from './components/tutor/courses/TutorPreviewCourse';
import AddLessonToCourse from './components/tutor/addLesson';
import TutorCoursePage from './components/tutor/courses/about/index.js';
import WrongAccountPage from './components/WrongPage';
import TutorPrivateRoute from './contexts/TutorPrivateRoute';
import TutorPublicRoute from './contexts/TutorPublicRoute';
import { TutorAuthProvider } from './contexts/TutorContext';



function App() {
  return (
    <Router>
      <AuthProvider>
        <AdminAuthProvider>
          <TutorAuthProvider>
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
            {/* <Route path="/register/:id" component={RegisterForCourse} /> */}
            <PrivateRoute path="/register/:id" component={RegisterForCourse} />
            <PrivateRoute path="/my-courses" component={MyCourses} />
            <PrivateRoute path="/all-courses" component={AllCourses} />

            {/* ADMIN Routes */}
            <Route path="/admin" component={AdminLogin} />
            <AdminPrivateRoute path="/dashboard" component={Dashboard} />
            <AdminPrivateRoute path="/students" component={Students} />
            <AdminPrivateRoute path="/tutors" component={Tutors} />

            {/* TUTOR PUBLIC ROUTES */}
            

            
            <TutorPublicRoute restricted path="/tutor-login" component={TutorLogin} exact />

            <TutorPublicRoute restricted path="/tutor" component={TutorSignUp}  exact />

            {/* TUTOR PRIVATE ROUTES */}
            <Route path="/wrong-account" component={WrongAccountPage} />
            <TutorPrivateRoute path="/tutor-complete-signup" component={NewTutor} />
            <TutorPrivateRoute path="/tutor-dashboard" component={TutorDashboard} />
            <TutorPrivateRoute path="/tutor-about/:id" component={TutorCoursePage} />
            <TutorPrivateRoute path="/tutor-courses" component={TutorDashboard} />
            <TutorPrivateRoute path="/tutor-preview-course/:id" component={TutorPreviewCourse} />
            <TutorPrivateRoute path="/tutor-create-course" component={TutorCreateCourse} />
            <TutorPrivateRoute path="/tutor-create-lesson/:courseIdParam" component={AddLessonToCourse} />
            <TutorPrivateRoute path="/tutor-profile" component={TutorProfile} />
            
          </Switch>
          </TutorAuthProvider>
        </AdminAuthProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
