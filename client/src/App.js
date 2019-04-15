import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './Components/Welcome'
import Shedule from './Components/Shedule'

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/shedule/:id' component={Shedule} />
      </Switch>
    </Router>
  )
}