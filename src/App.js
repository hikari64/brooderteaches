import './App.css';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Home from './pages';
import Courses from "./pages/courses";
import CoursePage from './pages/coursepage';
import CoursePreview from './pages/coursepreview';
import { AuthProvider } from './contexts/AuthContext';
import login from './pages/login';
import signup from './pages/signup';
import profile from './pages/profile';


function App() {
  return (
    <Router>
      <AuthProvider>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={login}/>
        <Route path='/signup' component={signup}/>
        <Route path='/profile' component={profile}/>
        <Route path='/courses' component={Courses}/>
        <Route path='/about/:id' component={CoursePage}/>
        <Route path='/preview/:id' component={CoursePreview}/>

      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
