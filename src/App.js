import './App.css';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/login';
import Courses from "./pages/courses";
import CoursePage from './pages/coursepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={SigninPage}/>
        <Route path='/courses' component={Courses}/>
        <Route path='/coursepreview/:id' component={CoursePage}/>
      </Switch>
    </Router>
  );
}

export default App;
