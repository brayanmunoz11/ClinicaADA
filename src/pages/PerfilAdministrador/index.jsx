import React, { useEffect, useState } from 'react'
import PerfilComponent from 'components/perfil'
import { Container, TablaContainer } from './styles'
import Tabla from 'components/Tabla'
import getCitas from 'services/getCitas.js'
import terminarCita from 'services/terminarCita'

export default function PerfilAdministrador({ }) {
  const [citas, setCitas] = useState([])
  const concluirCita = (idCita) => {
    setCitas((prev) => prev.filter(el => el.idCita !== idCita))
    terminarCita({idCita})
  }

  useEffect(()=> {
    getCitas()
      .then(setCitas)
  },[])

  return (<>
    <Container>
      <PerfilComponent />
      <ButtonsContainer>
        
      </ButtonsContainer>
    </Container>
  </>)
}