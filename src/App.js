import './App.css';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/login';
import Courses from "./pages/courses";
import CoursePage from './pages/coursepage';
import CoursePreview from './pages/coursepreview';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={SigninPage}/>
        <Route path='/courses' component={Courses}/>
        <Route path='/about/:id' component={CoursePage}/>
        <Route path='/preview/:id' component={CoursePreview}/>

      </Switch>
    </Router>
  );
}

export default App;
