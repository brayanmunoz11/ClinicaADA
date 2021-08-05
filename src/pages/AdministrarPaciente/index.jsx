import React, { useState, useEffect } from 'react'
import { Container, TitleContainer, PacienteContainer, BuscadorContainer, TablaContainer, AnadirContainer } from './styles'
import 'date-fns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Tabla from 'components/Tabla'
import getPacientes from 'services/listarPacientes'
import { Link } from 'react-router-dom'
import ButtonAnadir from 'components/buttonAnadir'
import Anadir from 'components/anadir'
import setFont2 from '../../services/setFont';
import Context from '../../context/languageContext';
import { useContext } from 'react';
import Select from 'react-select'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import changePaciente from '../../services/changePaciente';
export default function AdministrarPaciente({ }) {
  const [pacientes, setPacientes] = useState([])
  const [anadir, setAnadir] = useState(false)
  const { language, setLanguage, texts } = useContext(Context)
  const [editar, setEditar] = useState(false)
  const [usuario, setUsuario] = useState([])

  const [seccion, setSeccion] = useState('')

  const [horario, setHorario] = useState()
  const handleDateChange = (date) => {
    setHorario(date)
  };
  useEffect(() => {
    getPacientes()
      .then(setPacientes)
  }, [])
  const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  const [size, setSize] = useState(localStorage.getItem('fontSize'))
  useEffect(() => {
    if (font !== null) {
      setFont2(font, size)
    }
  }, [])
  const sexo = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Femenino' }
  ]
  useEffect(() => {
    getPacientes()
      .then(res => {
        setUsuario(prev => prev.concat(res.map(user => {
          const userN = {
            value: user.id,
            label: user.nombre
          }
          return userN
        })))
      })
  }, [])
  const editarPaciente = (evt) => {
    setEditar(!editar)

    const nombre = document.querySelector('#nombre')
    const sexo = document.querySelector('#sexo')
    const tipo = document.querySelector('#tipo')
    const centro = document.querySelector('#centro')
    const row = evt.target.parentNode.parentNode
    setSeccion(row.id)
    // changePaciente({
    //   id: row.id,
    //   nombre: nombre.value,
    //   sexo: sexo.childNodes[2].value,
    //   tipo: tipo.childNodes[2].value,
    //   centro: centro.childNodes[2].value
    // }).then(setPacientes)
  }
  return (<>
    {
      (anadir)
        ? <Anadir type='Paciente' setAnadir={setAnadir} setPacientes={setPacientes} />
        : null
    }
    <Container>
      <TitleContainer>
        <Link to='/ClinicaAdministrador'>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className='icon' />
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
                    <th>{texts[language].Sexo}</th>
                    <th>{texts[language].Vigencia}</th>
                    <th>{texts[language].TipoSeguro}</th>
                    <th>{texts[language].CentroAsistencial}</th>
                    <th className='editar'>Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    pacientes.map((paciente, index) =>
                      <tr key={paciente.id} id={paciente.id}>
                        {
                          (editar && seccion == paciente.id)
                            ? <>
                              <td>
                              <input type="text" id='nombre' />
                                {/* <Select
                                  options={usuario}
                                  name="paciente"
                                  // value={especialidad}
                                  placeholder='Elige un paciente'
                                  id='nombre'
                                  styles={{
                                    menuList: styles => ({ ...styles, maxHeight: '200px' }),
                                    control: styles => ({ ...styles, width: 'calc(100% - 40px)' })
                                  }}
                                /> */}
                              </td>
                              <td>
                                <Select
                                  options={sexo}
                                  name="sexo"
                                  // value={especialidad}
                                  placeholder='Elige un sexo'
                                  id='sexo'
                                  styles={{
                                    control: styles => ({ ...styles, width: 'calc(100% - 40px)' })
                                  }}
                                />
                              </td>
                              <td>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container justifyContent="space-around">
                                    <KeyboardDatePicker
                                      name="fecha"
                                      margin="normal"
                                      id="date-picker-dialog"
                                      format="dd/MM/yyyy"
                                      value={horario}
                                      onChange={handleDateChange}
                                      KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                      }}
                                      style={{ width: '100%' }}
                                    />
                                  </Grid>
                                </MuiPickersUtilsProvider></td>
                              <td>
                                <Select
                                  options={[
                                    { value: 'Titular', label: 'Titular' },
                                    { value: 'No Titular', label: 'No titular' }
                                  ]}
                                  name="sala"
                                  // value={especialidad}
                                  placeholder='Elige una sala'
                                  id='tipo'
                                  styles={{
                                    control: styles => ({ ...styles, width: 'calc(100% - 40px)' })
                                  }}
                                />
                              </td>
                              <td>
                                <Select
                                  options={[
                                    { value: 'UNMSM', label: 'UNMSM' },
                                    { value: 'PUCP', label: 'PUCP' }
                                  ]}
                                  name="sala"
                                  // value={especialidad}
                                  placeholder='Elige una sala'
                                  id='centro'
                                  styles={{
                                    control: styles => ({ ...styles, width: 'calc(100% - 40px)' })
                                  }}
                                />
                              </td>
                              <td>
                                <button className='button' onClick={editarPaciente}>Aceptar</button>
                                <button className='button' onClick={() => setEditar(false)}>Cancelar</button>
                              </td>
                            </>
                            : <>
                              <td>{paciente.nombre}</td>
                              <td>{paciente.sexo}</td>
                              <td>{paciente.vigencia}</td>
                              <td>{paciente.tipoSeguro}</td>
                              <td>{paciente.centro}</td>
                              <td>
                                <button className='button' onClick={(evt) => {
                                  const row = evt.target.parentNode.parentNode
                                  setSeccion(row.id)
                                  setEditar(!editar)
                                }}>Editar</button>
                              </td>
                            </>
                        }
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