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
import { AuthProvider } from "./contexts/AuthContext";
import login from "./pages/login";
import signup from "./pages/signup";
import Profile from "./pages/profile";
import PrivateRoute from "./contexts/PrivateRoute";
import ProfileUpdate from "./pages/updateprofile";
import forgotpassword from "./pages/forgotpassword";

// ADMINISTRATOR COMPONENTS
import AdminLogin from "./components/admin/AdminLogin";

// TUTOR COMPONENTS
import TutorLogin from "./components/tutor/auth/TutorLogin";
import TutorSignUp from "./components/tutor/auth/TutorSignUp";
import Process from "./components/tutor/signupprocess/Process";

function App() {
  return (
    <Router>
      <AuthProvider>
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

          {/* ADMIN Routes */}
          <Route path="/admin" component={AdminLogin} />

          {/* TUTOR ROUTES */}
          <Route path="/tutor/login" component={TutorLogin} />
          <Route path="/tutor" component={TutorSignUp} />
          <Route path="/tutor-signup" component={Process} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
