import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { Container, ConfirmContainer } from './styles'
import terminarCita from 'services/terminarCita'

export default function ConcluirCita({ setConfirm, setCitas, id}) {
  const cerrar = () => {
    setCitas((prev) => prev.filter(el => el.idCita !== id))
    terminarCita({ id }).then(res => {
      setConfirm(false)
    })
  }

  return (<>
    <Container>
      <ConfirmContainer>
        <div className="signo">
          <FontAwesomeIcon icon={faExclamationTriangle} className='icon' />
        </div>
        <div className="texto">
          <h1>¿Estas seguro de conluir la cita?</h1>
        </div>
        <div className="buttons">
          <button onClick={cerrar}>Concluir</button>
          <button onClick={() => setConfirm(false)}>Cancelar</button>
        </div>
      </ConfirmContainer>
    </Container>
  </>)
}