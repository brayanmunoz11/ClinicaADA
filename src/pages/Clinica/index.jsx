import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Formulario from 'pages/Formulario'
import FormTabsContainer from 'pages/FormTabsContainer'
import MenuClinica from 'components/menuClinica'
import Perfil from 'pages/Perfil'
import './styles.css'

export default function Clinica ({}){
  return (<>
    <div className="clinicaContainer">
      <MenuClinica />
        <Switch>
          <Route path="/ClinicaPaciente/Config">
            <h1>Configuraciones</h1>
          </Route>
          <Route path="/ClinicaPaciente/Formulario">
            <FormTabsContainer />
          </Route>
          <Route path="/ClinicaPaciente">
            <Perfil />
          </Route>
        </Switch>
    </div>
  </>)
}