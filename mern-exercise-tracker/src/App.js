import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

import Navbar from './components/Navbar.component'
import ExercisesList from './components/ExercisesList.component'
import CreateExercise from './components/CreateExercise.component'
import CreateUser from './components/CreateUser.component'
import EditExercise from './components/EditExercise.component'

function App() {
  return (
    <Router>
      <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
      </div>
    </Router>

  );
}

export default App;
