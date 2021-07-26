import React from 'react'

export default function Comfirm ({especialidad, horario, turno, doctor}){
  console.log({especialidad, horario, turno, doctor})
  return (<>
    <p>{especialidad}</p>
    <p>{horario.toString()}</p>
    <p>{turno}</p>
    <p>{doctor}</p>
  </>)
}