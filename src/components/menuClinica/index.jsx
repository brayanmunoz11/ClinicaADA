import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faStickyNote, faCog, faHome } from '@fortawesome/free-solid-svg-icons'

export default function MenuClinica({}) {
  return (
    <>
      <div className="menu-clinica-container">
        <nav className="menu-clinica">
          <ul>
            <li><Link to='/Clinica'><FontAwesomeIcon icon={faUserAlt}/></Link></li>
            <li><Link to='/Clinica/Formulario'><FontAwesomeIcon icon={faStickyNote}/></Link></li>
            <li><Link to='/Clinica/Config'><FontAwesomeIcon icon={faCog}/></Link></li>
            <li><Link to='/'><FontAwesomeIcon icon={faHome}/></Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}


