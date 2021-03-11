import React from 'react'
import {BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component"
import EditExercises from "./components/edit-exercises.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUser from "./components/create-user.component"
function App() {
  return (
    <Router>
      <div> className = 'container' </div>
    <Navbar />
      <br/>
      <Route Path= "/" exact component={ExercisesList} />
      <Route Path= "/edit/:id" exact component={EditExercises} />
      <Route Path= "/create" exact component={CreateExercise} />
      <Route Path= "/user" exact component={CreateUser} />
    </Router>
    );
}
export default App;
