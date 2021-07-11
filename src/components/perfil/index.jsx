import React, {useEffect, useState} from 'react'
import { PerfilContainer, PerfilC, PerfilClose, PerfilInfo, PerfilImage, LinkB } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

export default function Perfil ({}){
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('usuario')))

  const cerraSession = () => {
    sessionStorage.setItem('usuario', 'null')
  }

  // useEffect(()=> {
  //   console.log(user)
  // },[])
  return (<>
    <PerfilContainer>
      <PerfilC>
        <PerfilImage>
          <FontAwesomeIcon icon={faUserAlt}/>
        </PerfilImage>
        <PerfilInfo>
          <div className="info">
            <p>Nombre</p>
            <p>{user.nombre}</p>
          </div>
          <div className="info">
            <p>Apellido</p>
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
          <LinkB to='/' onClick={cerraSession}>Cerrar Sesion</LinkB>
        </PerfilClose>
      </PerfilC>
    </PerfilContainer>
  </>)
}