import 'date-fns';
import React, {useState} from 'react'
import Select from 'react-select'
import Grid from '@material-ui/core/Grid';
import { FormularioContainer } from './styles'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function Formulario ({}){
  console.log('render Formulario')
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const Especialidad = [
    { value: 'cardiologia', label: 'Cardiologia' },
    { value: 'traumatologia', label: 'Traumatologia' },
    { value: 'oncologia', label: 'Oncologia' }
  ]

  const enviar = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    // debugger
    console.log(formData.get('tipo'))
  }

  return (<>
    <FormularioContainer>
      <h1>Formulario</h1>
      <form action="" onSubmit={enviar}>
        <div className="inputInfo">
          <h2>Especialidad</h2>
          <div className="select">
            <Select options={Especialidad} name="especialidad"/>
          </div>
        </div>
        <div className="inputInfo">
          <h2>Fecha</h2>
          <div className="select">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justifyContent="space-around">
                <KeyboardDatePicker
                  name="fecha"
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
        </div>
        <div className="inputInfo">
          <h2>Turno</h2>
          <div className="select">
            <Select options={[{value: 'm', label: 'Mañana'}, {value: 't', label: 'Tarde'}]} name="turno"/>
          </div>
        </div>

        <button>on</button>
      </form>
    </FormularioContainer>
  </>)
}