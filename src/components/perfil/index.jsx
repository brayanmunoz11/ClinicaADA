import React, { useEffect, useState, useContext } from 'react'
import { PerfilContainer, TopPerfil, MiddlePerfil, MiddleContainer, Info } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUsersCog, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
// import Context from '../../context/languageContext';
// import setFont2 from '../../services/setFont';
import PerfilInfo from 'components/PerfilInfo';

export default function Perfil() {
  // const { language, setLanguage, texts } = useContext(Context)

  // const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  // const [size, setSize] = useState(localStorage.getItem('fontSize'))

  // useEffect(() => {
  //   if (font !== null) {
  //     setFont2(font, size)
  //   }
  // }, [])


  const familiares = [
    {
      nombre: 'Gura Hololive',
      parentesco: 'Hija',
      correo: 'gura@hololive.jp'
    },
    {
      nombre: 'Amelia Hololive',
      parentesco: 'Hija',
      correo: 'amelia@hololive.jp'
    }
  ]

  return (<>
    <PerfilContainer>
      <TopPerfil>
        <PerfilInfo />
      </TopPerfil>
      <MiddlePerfil>
        <MiddleContainer>
          <div className="title">
            <h1>Panel de Informacion</h1>
          </div>
          <Info>
            <div className="infoTitle">
              <h1>
                <FontAwesomeIcon icon={faUsersCog} className='icon' />
                Informacion de Familiares
              </h1>
            </div>
            <div className="infoContainer">
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Parentesco</th>
                    <th>Correo</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    familiares.map(familiar => {
                      return (
                        <tr>
                          <td>{familiar.nombre}</td>
                          <td>{familiar.parentesco}</td>
                          <td>{familiar.correo}</td>
                          <td>
                            <div className="opciones">
                              <FontAwesomeIcon icon={faEdit} className='icon' />
                              <FontAwesomeIcon icon={faTrash} className='icon' />
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              <div className="anadirFamiliar">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </Info>
        </MiddleContainer>
      </MiddlePerfil>
    </PerfilContainer>
  </>)
}