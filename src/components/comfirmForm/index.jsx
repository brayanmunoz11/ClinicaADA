import React from 'react'
import createCita from 'services/createCita'

export default function Comfirm ({especialidad, horario, turno, doctor}){
  const enviarForm = () => {
    const iduser = JSON.parse(sessionStorage.getItem('usuario')).id

    createCita({
      idPaciente: iduser,
      especialidad,
      fecha: horario.toString(),
      turno,
      idDoctor: 2055
    })
    // .then()
  }

  return (<>
    <p>{especialidad}</p>
    <p>{horario.toString()}</p>
    <p>{turno}</p>
    <p>{doctor}</p>
    <button onClick={enviarForm}>enviar</button>
  </>)
}