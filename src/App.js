import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/login';
import Courses from "./pages/courses";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={SigninPage}/>
        <Route path='/courses' component={Courses}/>
      </Switch>
    </Router>
  );
}

export default App;
