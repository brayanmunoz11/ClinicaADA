import React, { useEffect, useState } from 'react'
import PerfilComponent from 'components/perfil'
import { Container, ButtonsContainer, Button } from './styles'

export default function PerfilAdministrador({ }) {

  return (<>
    <Container>
      <PerfilComponent />
      <ButtonsContainer>
        <div className="container">
          <Button to='/ClinicaAdministrador/AdministrarPersonal'>Administrar Personal</Button>
          <Button to='/ClinicaAdministrador/AdministrarPacientes'>Administrar Pacientes</Button>
          <Button to='/ClinicaAdministrador/AdministrarCamas'>Administrar camas de hospitalizacion</Button>
        </div>
      </ButtonsContainer>
    </Container>
  </>)
}