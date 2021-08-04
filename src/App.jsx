import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from 'pages/Home'
import LoginRegistro from 'pages/LoginRegistro'
import Clinica from 'pages/Clinica'
import ClinicaDoctor from 'pages/ClinicaDoctor'
import ClinicaAdministrador from 'pages/ClinicaAdministrador'
import { LanguageContext } from './context/languageContext'
function App() {

  return (<>
    {/* <h1>prasddsuebaasd</h1> */}
    <LanguageContext>
      <Router>
        <Switch>
          <Route path="/Login">
            <LoginRegistro />
          </Route>
          <Route path="/ClinicaPaciente">
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
    </LanguageContext>
 </> )
}

export default App
