import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from 'pages/Home'
import LoginRegistro from 'pages/LoginRegistro'
import Clinica from 'pages/Clinica'
import ClinicaDoctor from 'pages/ClinicaDoctor'
import ClinicaAdministrador from 'pages/ClinicaAdministrador'

// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();

function App() {

  return (<>
    {/* <h1>prasddsuebaasd</h1> */}
    <Router>
      <Switch>
        <Route path="/Login">
          <LoginRegistro />
        </Route>
        <Route path="/Clinica">
          <Clinica />
        </Route>
        <Route path="/ClinicaDoctor">
          <ClinicaDoctor />
        </Route>
        <Route path="/ClinicaAdministrador">
          <ClinicaAdministrador />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
 </> )
}

export default App
