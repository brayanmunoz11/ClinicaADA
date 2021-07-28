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
            <li><Link to={path}><FontAwesomeIcon icon={faUserAlt}/></Link></li>
            {
              (tipo === 'paciente')
              ? <li><Link to='/ClinicaPaciente/Formulario'><FontAwesomeIcon icon={faStickyNote}/></Link></li>
              : null
            }
            <li><Link to='/ClinicaPaciente/Config'><FontAwesomeIcon icon={faCog}/></Link></li>
            <li><Link to='/'><FontAwesomeIcon icon={faHome}/></Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}


