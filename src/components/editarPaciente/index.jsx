import React, { useEffect, useState } from 'react'
import { Container, EditarContainer } from './styles';
import 'date-fns';
import Select from 'react-select'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import changePaciente from '../../services/changePaciente';

export default function EditarPaciente({ paciente, setEditar }) {
  const [usuario, setUsuario] = useState([])
  const [seccion, setSeccion] = useState('')

  const [horario, setHorario] = useState()
  const handleDateChange = (date) => {
    setHorario(date)
  };
  const editarPaciente = (evt) => {
    setEditar(false)
    const correo = document.querySelector('#correo')
    const centro = document.querySelector('#centro')
    const editUser = {
      id: paciente.id,
      correo: correo.value,
      centro: centro.childNodes[2].value,
      fecha: `${horario.getDate()}/${horario.getMonth()+1}/${horario.getFullYear()}`
    }
    changePaciente(editUser)
    // .then(setPacientes)
  }
  useEffect(()=> {
    console.log(paciente)
  },[])

  return (<>
    <Container>
      <EditarContainer>
        <h1>Editar Paciente</h1>
        <div className="editarItem">
          <input type="dni" id='dni' defaultValue={paciente.dni} disabled/>
        </div>
        <div className="editarItem">
          <input type="nombre" id='nombre' defaultValue={paciente.nombre} disabled/>
        </div>
        <div className="editarItem">
          <input type="correo" id='correo' defaultValue={paciente.email} />
        </div>
        <div className="editarItem">
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
          </MuiPickersUtilsProvider>
        </div>
        {/* <div className="editarItem">
          <Select
            options={[
              { value: 'Titular', label: 'Titular' },
              { value: 'No Titular', label: 'No titular' }
            ]}
            name="sala"
            // value={especialidad}
            placeholder='Elige una sala'
            id='tipo'
          />
        </div> */}
        <div className="editarItem">
          <Select
            options={[
              { value: 'UNMSM', label: 'UNMSM' },
              { value: 'PUCP', label: 'PUCP' }
            ]}
            name="sala"
            // value={especialidad}
            placeholder='Elige un centro asistencial'
            id='centro'
          />
        </div>
        <div className="buttons">
          <button className='button' onClick={editarPaciente}>Aceptar</button>
          <button className='button' onClick={() => setEditar(false)}>Cancelar</button>
        </div>
      </EditarContainer>
    </Container>
  </>)
}
