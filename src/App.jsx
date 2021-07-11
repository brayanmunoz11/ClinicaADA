import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from 'pages/Home'
import LoginRegistro from 'pages/LoginRegistro'
import Clinica from 'pages/Clinica'
// import MenuClinica from 'components/menuClinica'

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
 </> )
}

export default App
