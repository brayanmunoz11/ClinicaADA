import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Formulario from 'pages/Formulario'
import MenuClinica from 'components/menuClinica'
import Perfil from 'pages/Perfil'
import './styles.css'

export default function Clinica ({}){
  return (<>
    <div className="clinicaContainer">
      <MenuClinica />
        <Switch>
          <Route path="/Clinica/Formulario">
            <Formulario />
          </Route>
          <Route path="/Clinica">
            <Perfil />
          </Route>
          <Route path="/Clinica/Config">
            <h1>Configuraciones</h1>
          </Route>
        </Switch>
    </div>
  </>)
}