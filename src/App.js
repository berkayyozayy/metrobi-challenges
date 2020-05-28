import React from 'react'
import './App.css';
import Question1 from './Challenges/Question-1/Question1'
import Question2 from './Challenges/Question-2/Question2'
import Question3 from './Challenges/Question-3/Question3'
import Question4 from './Challenges/Question-4/Question4'
import NotFound from './Pages/NotFound';
import NavBar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contribute from './Pages/Contribute';


function App() {

  return (

    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={NavBar} />
          <Route exact path="/question1" component={Question1} />
          <Route exact path="/question2" component={Question2} />
          <Route exact path="/question3" component={Question3} />
          <Route exact path="/question4" component={Question4} />
          <Route exact path="/github" component={Contribute} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
