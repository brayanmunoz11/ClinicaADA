import React from 'react'
import {ConfigContainer} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLanguage, faFont, faHome } from '@fortawesome/free-solid-svg-icons'

export default function Config ({}){
  return (<>
    <ConfigContainer>
      <div className="titleContainer">
        <h1>Configuraciones</h1>
      </div>
      <div className="container">
        <div className="configItem">
          <FontAwesomeIcon icon={faEye} className='icon'/>
          <p>Modo Daltonico</p>
        </div>
        <div className="configItem">
          <FontAwesomeIcon icon={faLanguage} className='icon'/>
          <p>Cambiar idioma</p>
        </div>
        <div className="configItem">
          <FontAwesomeIcon icon={faFont} className='icon'/>
          <p>Cambiar fuente</p>
        </div>
      </div>
    </ConfigContainer>
  </>)
}