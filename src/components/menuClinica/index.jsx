import React, { useEffect, useContext, useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faStickyNote, faCog, faHome } from '@fortawesome/free-solid-svg-icons'
import Context from '../../context/languageContext';
import logoC from 'img/logo.png'

export default function MenuClinica({ }) {
  const tipo = JSON.parse(sessionStorage.getItem('usuario')).tipoUsuario
  const [path, setPath] = useState('')
  const { language, setLanguage, texts } = useContext(Context)

  useEffect(() => {
    if (tipo === 'paciente') {
      setPath('/ClinicaPaciente')
    }
    else if (tipo === 'doctor') {
      setPath('/ClinicaDoctor')
    }
    else if (tipo === 'administrador') {
      setPath('/ClinicaAdministrador')
    }
    // console.log(path)
  }, [tipo])

  const changeMenu = (evt) => {
    console.log(evt.target)
  }

  return (
    <>
      <div className="menu-clinica-container">
        <div className="logoMenu" onClick={changeMenu}>
          <figure className="logo">
            <img src={logoC} alt="logo"/>
          </figure>
          <div className="logoName">
            <p>Hospital <span>Hololive</span></p>
          </div>
        </div>
        <nav className="menu-clinica">
          <ul>
            <div className="up">
              <li>
                <Link to={path}>
                  <FontAwesomeIcon icon={faUserAlt} className='icon'/>
                  <p>{texts[language].Perfil}</p>
                </Link>
              </li>
              {
                (tipo === 'paciente')
                  ? <li>
                    <Link to='/ClinicaPaciente/Formulario'>
                      <FontAwesomeIcon icon={faStickyNote} className='icon'/>
                      <p>{texts[language].Formulario}</p>
                    </Link>
                  </li>
                  : null
              }
              <li>
                <Link to='/ClinicaPaciente/Config'>
                  <FontAwesomeIcon icon={faCog} className='icon'/>
                  <p>{texts[language].Configuraciones}</p>
                </Link>
              </li>
            </div>
            <div className="down">
              <li>
                <Link to='/'>
                  <FontAwesomeIcon icon={faHome} className='icon'/>
                  <p>{texts[language].Home}</p>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  )
}


