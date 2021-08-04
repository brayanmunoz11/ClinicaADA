import React, {useEffect, useState} from 'react'
import { PerfilContainer, PerfilC, PerfilClose, PerfilInfo, PerfilImage, LinkB } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Context from '../../context/languageContext';
import { useContext } from 'react';
export default function Perfil (){
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('usuario')))
  const {language, setLanguage, texts} = useContext(Context)

  const cerraSession = () => {
    sessionStorage.setItem('usuario', 'null')
  }
  return (<>
    <PerfilContainer>
      <PerfilC>
        <PerfilImage>
          <FontAwesomeIcon icon={faUserAlt}/>
        </PerfilImage>
        <PerfilInfo>
          <div className="info">
            <p>{texts[language].Nombre}</p>
            <p>{user.nombre}</p>
          </div>
          <div className="info">
            <p>{texts[language].Apellido}</p>
            <p>{user.apellido}</p>
          </div>
          <div className="info">
            <p>E-mail</p>
            <p>{user.email}</p>
          </div>
          <div className="info">
            <p>DNI</p>
            <p>{user.usuario}</p>
          </div>
        </PerfilInfo>
        <PerfilClose>
          <LinkB to='/' onClick={cerraSession}>{texts[language].Cerrar}</LinkB>
        </PerfilClose>
      </PerfilC>
    </PerfilContainer>
  </>)
}