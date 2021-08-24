import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import deleteUser from 'services/deleteUser'
import deleteCama from 'services/deleteCama'
import { Container, ConfirmContainer } from './styles'

const DELETES = {
  Personal: (id) => deleteUser(id),
  Paciente: (id) => deleteUser(id),
  Camas: (id) => deleteCama(id)
}

export default function ConfirmDelete({ setConfirm, iddelete, type, setPacientes, setPacientesTotal, pacientes }) {
  const deletePaciente = () => {
    // const idpac = evt.target.parentNode.parentNode.parentNode.id;
    if (type !== 'Camas') {
      setPacientes(pacientes.filter(paciente => paciente.id != iddelete))
      setPacientesTotal(pacientes.filter(paciente => paciente.id != iddelete))
    } else {
      setPacientes(pacientes.filter(paciente => paciente.idcamas != iddelete))
      setPacientesTotal(pacientes.filter(paciente => paciente.idcamas != iddelete))
    }
    DELETES[type](iddelete).then(res => setConfirm(false))
  }
  return (<>
    <Container>
      <ConfirmContainer>
        <div className="signo">
          <FontAwesomeIcon icon={faExclamationTriangle} className='icon'/>
        </div>
        <div className="texto">
          <h1>¿Estas seguro de eliminar?</h1>
        </div>
        <div className="buttons">
          <button onClick={deletePaciente}>Eliminar</button>
          <button onClick={() => setConfirm(false)}>Cancelar</button>
        </div>
      </ConfirmContainer>
    </Container>
  </>)
}