import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faStickyNote, faCog, faHome } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function MenuClinica({}) {
  const tipo = JSON.parse(sessionStorage.getItem('usuario')).tipoUsuario
  const [path, setPath] = useState('')

  useEffect(() => {
    if(tipo === 'paciente') {
      setPath('/ClinicaPaciente')
    }
    else if(tipo === 'doctor') {
      setPath('/ClinicaDoctor')
    }
    else if(tipo === 'administrador') {
      setPath('/ClinicaAdministrador')
    }
    // console.log(path)
  }, [tipo])
  return (
    <>
      <div className="menu-clinica-container">
        <nav className="menu-clinica">
          <ul>
            <li>
              <Link to={path}>
                <FontAwesomeIcon icon={faUserAlt}/>
                <p>Perfil</p>
              </Link>
            </li>
            {
              (tipo === 'paciente')
              ? <li>
                  <Link to='/ClinicaPaciente/Formulario'>
                    <FontAwesomeIcon icon={faStickyNote}/>
                    <p>Formulario de cita</p>
                  </Link>
                </li>
              : null
            }
            <li>
              <Link to='/ClinicaPaciente/Config'>
                <FontAwesomeIcon icon={faCog}/>
                <p>Configuraciones</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FontAwesomeIcon icon={faHome}/>
                <p>Volver al Home</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}


