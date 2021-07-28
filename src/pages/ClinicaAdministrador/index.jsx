import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FormTabsContainer from 'pages/FormTabsContainer'
import PerfilAdministrador from 'pages/PerfilAdministrador'
import MenuClinica from 'components/menuClinica'
import AdministrarPersonal from 'pages/AdministrarPersonal'
import AdministrarPaciente from 'pages/AdministrarPaciente'
import AdministrarCamas from 'pages/AdministrarCamas'

export default function ClinicaAdministrador({ }) {
  return (<>
    <div className="clinicaContainer">
      <MenuClinica />
      <Switch>
        <Route path="/Clinica/Config">
          <h1>Configuraciones</h1>
        </Route>
        <Route path="/ClinicaAdministrador/AdministrarCamas">
          <AdministrarCamas />
        </Route>
        <Route path="/ClinicaAdministrador/AdministrarPacientes">
          <AdministrarPaciente />
        </Route>
        <Route path="/ClinicaAdministrador/AdministrarPersonal">
          <AdministrarPersonal />
        </Route>
        <Route path="/ClinicaAdministrador">
          <PerfilAdministrador/>
        </Route>
        {/* <Route path="/Clinica/Formulario">
          <FormTabsContainer />
        </Route> */}
      </Switch>
    </div>
  </>)
}