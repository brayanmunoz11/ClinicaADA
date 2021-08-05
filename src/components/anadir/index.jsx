import React, { useEffect } from 'react'
import { Container, AnadirContainer, TitleContainer, FormContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useState } from 'react'
import createDoctor from '../../services/crearDoctor'
import createCama from '../../services/crearCama'
import createPaciente from '../../services/crearPaciente'
import getPacientes from '../../services/listarPacientes'
import setFont2 from '../../services/setFont';

const Especialidad = [
  { value: 'cardiologia', label: 'Cardiologia' },
  { value: 'traumatologia', label: 'Traumatologia' },
  { value: 'oncologia', label: 'Oncologia' },
  { value: 'oncologia', label: 'Oncologia' },
  { value: 'oncologia', label: 'Oncologia' },
  { value: 'oncologia', label: 'Oncologia' },
  { value: 'oncologia', label: 'Oncologia' },
  { value: 'oncologia', label: 'Oncologia' }
]
const turnos = [
  { value: 'mañana', label: 'Mañana' },
  { value: 'tarde', label: 'Tarde' },
  { value: 'noche', label: 'Noche' }
]
const sexo = [
  { value: 'M', label: 'Masculino' },
  { value: 'F', label: 'Femenino' }
]



export default function Anadir({ type, setAnadir, setDoctores, setPacientes, setCamas }) {
  const [horario, setHorario] = useState()
  const [usuario, setUsuario] = useState([])

  const SERVICES = {
    Personal: (formData) => createDoctor(formData).then(res => {
      setDoctores(res)
      setAnadir(false)
    }),
    Paciente: (formData) => createPaciente(formData).then(res => {
      setPacientes(res)
      setAnadir(false)
    }),
    Camas: (formData) => createCama(formData).then(res => {
      setCamas(res)
      setAnadir(false)
    }),
  }
  const handleDateChange = (date) => {
    setHorario(date)
  };

  const changeAnadir = () => {
    setAnadir(false)
  }

  const enviarForm = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    SERVICES[type](formData)
  }

  useEffect(() => {
    if(type === 'Camas') {
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
    }
  }, [])
  const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  const [size, setSize] = useState(localStorage.getItem('fontSize'))
  useEffect(()=> {
    if(font !== null) {
      setFont2(font, size)
    }
  },[])

  return (<>
    <Container>
      <AnadirContainer>
        <TitleContainer>
          <h1><FontAwesomeIcon icon={faFileAlt} /> Añadir {type}</h1>
          <FontAwesomeIcon icon={faTimes} onClick={changeAnadir} className='icon' />
        </TitleContainer>
        <FormContainer>
          <form onSubmit={enviarForm}>
            {
              (type === 'Personal')
                ? <>
                  <div className="formItem">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name='nombre' autoComplete='off' />
                  </div>
                  <div className="formItem">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name='apellido' autoComplete='off' />
                  </div>
                  <div className="formItem">
                    <label htmlFor="usuario">DNI</label>
                    <input type="text" name='usuario' autoComplete='off' />
                  </div>
                  <div className="formItem">
                    <label htmlFor="sexo">Sexo</label>
                    <Select
                      options={sexo}
                      name="sexo"
                      // value={especialidad}
                      placeholder='Elige un sexo'
                    />
                  </div>
                  <div className="formItem">
                    <label htmlFor="especialidad">Especialidad</label>
                    <Select
                      options={Especialidad}
                      name="especialidad"
                      // value={especialidad}
                      placeholder='Elige una especialidad'
                      styles={{
                        menuList: styles => ({ ...styles, height: '200px' }),
                      }}
                    />
                  </div>
                  <div className="formItem">
                    <label htmlFor="turno">Turno</label>
                    <Select
                      options={turnos}
                      name="turno"
                      // value={especialidad}
                      placeholder='Elige un turno'
                    />
                  </div>
                  {/* <h2>Credenciales</h2> */}
                  <div className="formItem">
                    <label htmlFor="correo">Correo</label>
                    <input type="text" name='correo' autoComplete='off' />
                  </div>
                  <div className="formItem">
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" name='contrasena' />
                  </div>
                  <button className='button'>Enviar</button>
                </>
                : null
            }
            {
              (type === 'Paciente')
                ? <>
                  <div className="formItem">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name='nombre' />
                  </div>
                  <div className="formItem">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name='apellido' autoComplete='off' />
                  </div>
                  <div className="formItem">
                    <label htmlFor="usuario">DNI</label>
                    <input type="text" name='usuario' autoComplete='off' />
                  </div>
                  <div className="formItem">
                    <label htmlFor="sexo">Sexo</label>
                    <Select
                      options={sexo}
                      name="sexo"
                      // value={especialidad}
                      placeholder='Elige un sexo'
                    />
                  </div>
                  <div className="formItem">
                    <label htmlFor="vigencia">Vigencia</label>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justifyContent="space-around">
                        <KeyboardDatePicker
                          name="vigencia"
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
                    </MuiPickersUtilsProvider>
                  </div>
                  <div className="formItem">
                    <label htmlFor="tipoSeguro">Tipo de seguro</label>
                    <Select
                      options={[
                        { value: 'Titular', label: 'Titular' },
                        { value: 'Otro', label: 'Otro' }
                      ]}
                      name="tipoSeguro"
                      // value={especialidad}
                      placeholder='Elige un turno'
                    />
                  </div>
                  <div className="formItem">
                    <label htmlFor="centro">Centro Asistencial</label>
                    <Select
                      options={[
                        { value: 'UNMSM', label: 'UNMSM' },
                        { value: 'PUCP', label: 'PUCP' }
                      ]}
                      name="centro"
                      // value={especialidad}
                      placeholder='Elige un turno'
                    />
                  </div>
                  {/* <h2>Credenciales</h2> */}
                  <div className="formItem">
                    <label htmlFor="correo">Correo</label>
                    <input type="text" name='correo' autoComplete='off' />
                  </div>
                  <div className="formItem">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input type="password" name='contrasena' autoComplete='off' />
                  </div>
                  <button className='button'>Enviar</button>
                </> : null
            }
            {
              (type === 'Camas')
                ? <>
                  <div className="formItem">
                    <label htmlFor="paciente">Paciente</label>
                    <Select
                      options={usuario}
                      name="paciente"
                      // value={especialidad}
                      placeholder='Elige un paciente'
                      styles={{
                        menuList: styles => ({ ...styles, maxHeight: '200px'}),
                      }}
                    />
                  </div>
                  <div className="formItem">
                    <label htmlFor="sala">Sala</label>
                    <Select
                      options={[
                        { value: '1', label: 'Sala 1' },
                        { value: '2', label: 'Sala 2' }
                      ]}
                      name="sala"
                      // value={especialidad}
                      placeholder='Elige una sala'
                    />
                  </div>
                  <div className="formItem">
                    <label htmlFor="ocupada">Ocupada</label>
                    <Select
                      options={[
                        { value: 'Ocupada', label: 'Ocupada' },
                        { value: 'Sin ocupar', label: 'Sin ocupar' }
                      ]}
                      name="ocupada"
                      // value={especialidad}
                      placeholder='Elige una sala'
                    />
                  </div>
                  <button className='button buttonc'>Enviar</button>
                </> : null
            }
          </form>
        </FormContainer>
      </AnadirContainer>
    </Container>
  </>)
}