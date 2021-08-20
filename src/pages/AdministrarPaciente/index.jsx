import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faIdBadge, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { Container, TitleContainer, PacienteContainer, BuscadorContainer, TablaContainer, AnadirContainer } from './styles'
import ButtonAnadir from 'components/buttonAnadir'
import Anadir from 'components/anadir'
import EditarPaciente from 'components/editarPaciente';
import ModalProfile from 'components/modalProfile';
import getPacientes from 'services/listarPacientes'
import setFont2 from 'services/setFont';
import Context from '../../context/languageContext';
import deleteUser from 'services/deleteUser'

export default function AdministrarPaciente({ }) {
  const [pacientesTotal, setPacientesTotal] = useState([])
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState('')

  const [anadir, setAnadir] = useState(false)
  const [editar, setEditar] = useState(false)
  const [profile, setProfile] = useState(false)

  const { language, setLanguage, texts } = useContext(Context)
  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    getPacientes()
      .then(res => {
        setPacientes(res)
        setPacientesTotal(res)
      })
  }, [])

  const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  const [size, setSize] = useState(localStorage.getItem('fontSize'))
  const editarPaciente = (evt) => {
    const idpac = evt.target.parentNode.parentNode.parentNode.id
    setPaciente(pacientes.find(paciente => paciente.id == idpac))
    setEditar(true)
  }

  useEffect(() => {
    if (font !== null) {
      setFont2(font, size)
    }
  }, [])

  useEffect(() => {
    getPacientes()
      .then(res => {
        setUsuario(prev => prev.concat(res.map(user => {
          const userN = {
            value: user.id,
            label: user.nombre
          }
          return userN
        })))
      })
  }, [])

  const actualizarArray = (evt) => {
    let pac = pacientesTotal.filter(paciente => paciente['nombre'].includes(evt.target.value))
    setPacientes(pac)
  }
  const handleProfile = (evt) => {
    const idpac = evt.target.parentNode.parentNode.parentNode.id
    const usuarioEle = pacientes.find(paciente => paciente.id == idpac);
    setPaciente(usuarioEle)
    setProfile(true)
  }
  const deletePaciente = (evt) => {
    const idpac = evt.target.parentNode.parentNode.parentNode.id
    setPacientes(pacientes.filter(paciente => paciente.id != idpac))
    setPacientesTotal(pacientes.filter(paciente => paciente.id != idpac))
    deleteUser(idpac)
  }

  return (<>
    {
      (profile)
        ? <ModalProfile dni={paciente.dni} setProfile={setProfile} />
        : null
    }
    {
      (editar)
        ? <EditarPaciente setEditar={setEditar} paciente={paciente} />
        : null
    }
    {
      (anadir)
        ? <Anadir type='Paciente' setAnadir={setAnadir} setPacientes={setPacientes} />
        : null
    }
    <Container>
      <TitleContainer>
        <Link to='/ClinicaAdministrador'>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className='icon' />
        </Link>
        <h1>{texts[language].AdministrarPacientes}</h1>
      </TitleContainer>
      <PacienteContainer>
        <BuscadorContainer>
          <input type="text" onChange={actualizarArray} placeholder='Filtrar por nombre' />
        </BuscadorContainer>
        <TablaContainer>
          {
            pacientes.map((paciente) =>
              <div className="pacienteContainer" key={paciente.id} id={paciente.id}>
                <div className="pacienteInfo">
                  <div className="infoItem">
                    <p>Paciente: </p>
                    <p>{paciente.nombre}</p>
                  </div>
                  <div className="infoItem">
                    <p>DNI: </p>
                    <p>{paciente.dni}</p>
                  </div>
                </div>
                <div className="pacienteOpciones">
                  <h1>Opciones</h1>
                  <div className="opciones">
                    <div className="opcion" onClick={handleProfile}>
                      <FontAwesomeIcon icon={faIdBadge} className='icon' />
                      <p>Ver Perfil</p>
                    </div>
                    <div className="opcion" onClick={editarPaciente}>
                      <FontAwesomeIcon icon={faUserEdit} className='icon' />
                      <p>Editar</p>
                    </div>
                    <div className="opcion" onClick={deletePaciente}>
                      <FontAwesomeIcon icon={faTrash} className='icon' />
                      <p>Eliminar</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </TablaContainer>
        <AnadirContainer>
          <ButtonAnadir type='Paciente' setAnadir={setAnadir}>
            {texts[language].AnadirPaciente}
          </ButtonAnadir>
        </AnadirContainer>
      </PacienteContainer>
    </Container>
  </>)
}