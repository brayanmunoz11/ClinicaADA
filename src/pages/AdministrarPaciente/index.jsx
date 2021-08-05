import React, { useState, useEffect } from 'react'
import { Container, TitleContainer, PacienteContainer, BuscadorContainer, TablaContainer, AnadirContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
import Tabla from 'components/Tabla'
import getPacientes from 'services/listarPacientes'
import {Link} from 'react-router-dom'
import ButtonAnadir from 'components/buttonAnadir'
import Anadir from 'components/anadir'
import setFont2 from '../../services/setFont';
import Context from '../../context/languageContext';
import { useContext } from 'react';

export default function AdministrarPaciente ({}){
  const [pacientes, setPacientes] = useState([])
  const [anadir, setAnadir] = useState(false)
  const {language, setLanguage, texts} = useContext(Context)
  useEffect(()=> {
    getPacientes()
      .then(setPacientes)
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
      ? <Anadir type='Paciente'  setAnadir={setAnadir} setPacientes={setPacientes}/>
      : null
    }
    <Container>
      <TitleContainer>
        <Link to='/ClinicaAdministrador'>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className='icon'/>
        </Link>
        <h1>{texts[language].AdministrarPacientes}</h1>
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
                    <th>{texts[language].Nombre}</th>
                    <th className='sexo'>{texts[language].Sexo}</th>
                    <th className='vigencia'>{texts[language].Vigencia}</th>
                    <th>{texts[language].TipoSeguro}</th>
                    <th>{texts[language].CentroAsistencial}</th>
                    {/* <th className='editar'>Editar</th> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    pacientes.map((paciente, index) =>
                      <tr key={paciente.id}>
                        <td>{paciente.nombre}</td>
                        <td>{paciente.sexo}</td>
                        <td>{paciente.vigencia}</td>
                        <td>{paciente.tipoSeguro}</td>
                        <td>{paciente.centro}</td>
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
        <ButtonAnadir type='Paciente' setAnadir={setAnadir}>
            {texts[language].AnadirPaciente}
          </ButtonAnadir>
        </AnadirContainer>
      </PacienteContainer>
    </Container>
  </>)
}