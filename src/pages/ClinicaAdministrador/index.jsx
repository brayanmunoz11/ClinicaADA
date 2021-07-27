import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FormTabsContainer from 'pages/FormTabsContainer'
import PerfilAdministrador from 'pages/PerfilAdministrador'
import MenuClinica from 'components/menuClinica'

export default function ClinicaAdministrador({ }) {
  return (<>
    <div className="clinicaContainer">
      <MenuClinica />
      <Switch>
        <Route path="/Clinica/Formulario">
          <FormTabsContainer />
        </Route>
        <Route path="/ClinicaAdministrador">
          <PerfilAdministrador/>
        </Route>
        <Route path="/Clinica/Config">
          <h1>Configuraciones</h1>
        </Route>
      </Switch>
    </div>
  </>)
}