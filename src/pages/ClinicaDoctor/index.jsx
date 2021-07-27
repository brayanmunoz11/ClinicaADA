import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FormTabsContainer from 'pages/FormTabsContainer'
import PerfilDoctor from 'pages/PerfilDoctor'
import MenuClinica from 'components/menuClinica'

export default function ClinicaDoctor({ }) {
  return (<>
    <div className="clinicaContainer">
      <MenuClinica />
      <Switch>
        <Route path="/Clinica/Formulario">
          <FormTabsContainer />
        </Route>
        <Route path="/ClinicaDoctor">
          <PerfilDoctor />
        </Route>
        <Route path="/Clinica/Config">
          <h1>Configuraciones</h1>
        </Route>
      </Switch>
    </div>
  </>)
}