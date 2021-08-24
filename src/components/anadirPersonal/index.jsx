import React from 'react'
import Select from 'react-select'
import { Controller } from "react-hook-form";
import { MessageError } from '../anadir/styles';
import { ErrorMessage } from "@hookform/error-message";
const Especialidad = [
  { value: 'cardiologia', label: 'Cardiologia' },
  { value: 'traumatologia', label: 'Traumatologia' },
  { value: 'oncologia', label: 'Oncologia' }
]
const turnos = [
  { value: 'mañana', label: 'Mañana' },
  { value: 'tarde', label: 'Tarde' },
  { value: 'noche', label: 'Noche' }
]

export default function AnadirPersonal({ control, errors }) {
  return (<>
    <div className="formItem">
      <label htmlFor="especialidad">Especialidad</label>
      <Controller
        name="especialidad"
        isClearable
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={Especialidad}
            name="especialidad"
            placeholder='Elige una especialidad'
          />
        )}
        rules={{
          required: 'Elija una especialidad'
        }}
      />
      <ErrorMessage
        errors={errors}
        name="especialidad"
        render={({ messages }) => {
          return messages ? <MessageError><p>{messages.required}</p></MessageError> : null
        }}
      />
    </div>
    <div className="formItem">
      <label htmlFor="turno">Turno</label>
      <Controller
        name="turno"
        isClearable
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={turnos}
            name="turno"
            placeholder='Elige un turno'
          />
        )}
        rules={{
          required: 'Elija un turno'
        }}
      />
      <ErrorMessage
        errors={errors}
        name="turno"
        render={({ messages }) => {
          return messages ? <MessageError><p>{messages.required}</p></MessageError> : null
        }}
      />
    </div>
  </>)
}