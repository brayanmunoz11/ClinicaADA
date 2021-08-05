import React, { useState, useEffect  } from 'react'
import { Container, TitleContainer, PacienteContainer, BuscadorContainer, TablaContainer, AnadirContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
import Tabla from 'components/Tabla'
import getCamas from 'services/getCamas'
import {Link} from 'react-router-dom'
import Anadir from 'components/anadir'
import ButtonAnadir from 'components/buttonAnadir'
import setFont2 from '../../services/setFont';
import Context from '../../context/languageContext';
import { useContext } from 'react';

export default function AdministrarCamas ({}){
  const [camas, setCamas] = useState([])
  const [anadir, setAnadir] = useState(false)
  const {language, setLanguage, texts} = useContext(Context)

  useEffect(()=> {
    getCamas()
      .then(setCamas)
  },[])

  const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  const [size, setSize] = useState(localStorage.getItem('fontSize'))
  useEffect(()=> {
    if(font !== null) {
      setFont2(font, size)
    }
  },[])

  return (<>
    {
      (anadir)
      ? <Anadir type='Camas' setAnadir={setAnadir} setCamas={setCamas}/>
      : null
    }
    <Container>
      <TitleContainer>
        <Link to='/ClinicaAdministrador'>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className='icon'/>
        </Link>
        <h1>{texts[language].AdministrarCamas}</h1>
      </TitleContainer>
      <PacienteContainer>
        <BuscadorContainer>
          <input type="text" />
        </BuscadorContainer>
        <TablaContainer>
          <Tabla>
            <div className="tablapacientees">
              <table>
                <thead>
                  <tr>
                    <th className='small'>{texts[language].Cama}</th>
                    <th className='small'>{texts[language].Sala}</th>
                    <th className='small'>{texts[language].Ocupada}</th>
                    <th>{texts[language].Paciente}</th>
                    {/* <th>Cambiar estado</th> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    camas.map((cama, index) =>
                      <tr key={cama.idcamas}>
                        <td>{cama.idcamas}</td>
                        <td>{cama.sala}</td>
                        <td>{cama.estado}</td>
                        <td>{cama.nombre}</td>
                        {/* <td>
                          <button>Editar</button>
                        </td> */}
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </Tabla>
        </TablaContainer>
        <AnadirContainer>
          <ButtonAnadir type='Camas' setAnadir={setAnadir}>
            {texts[language].AnadirCama}
          </ButtonAnadir>
        </AnadirContainer>
      </PacienteContainer>
    </Container>
  </>)
}