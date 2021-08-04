import React from 'react'
import {ConfigContainer} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLanguage, faFont, faHome } from '@fortawesome/free-solid-svg-icons'

import Context from '../../context/languageContext';
import { useContext } from 'react';
export default function Config ({}){
  const {language, setLanguage, texts} = useContext(Context)

  const cambiarIdioma = (evt) => {
    setLanguage(prev => (prev === 'es') ? 'en' : 'es')
  }

  return (<>
    <ConfigContainer>
      <div className="titleContainer">
        <h1>{texts[language].Configuraciones}</h1>
      </div>
      <div className="container">
        {/* <div className="configItem">
          <FontAwesomeIcon icon={faEye} className='icon'/>
          <p>Modo Daltonico</p>
        </div> */}
        <div className="configItem" onClick={cambiarIdioma}>
          <FontAwesomeIcon icon={faLanguage} className='icon'/>
          <p>{texts[language].CambiarIdioma}</p>
        </div>
        <div className="configItem">
          <FontAwesomeIcon icon={faFont} className='icon'/>
          <p>{texts[language].CambiarFuente}</p>
        </div>
      </div>
    </ConfigContainer>
  </>)
}