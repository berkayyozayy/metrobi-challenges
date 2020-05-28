import React from 'react'
import './App.css';
import Question1 from './Challenges/Question-1/Question1'
import Question2 from './Challenges/Question-2/Question2'
import Question3 from './Challenges/Question-3/Question3'
import Question4 from './Challenges/Question-4/Question4'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <div className="container">
      <Router>
        <Route exact path="/question1" component={Question1} />
        <Route exact path="/question2" component={Question2} />
        <Route exact path="/question3" component={Question3} />
        <Route exact path="/question4" component={Question4} />
      </Router> 
    </div>
  );
}

export default App;
