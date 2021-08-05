import React, {useState, useEffect} from 'react'
import createCita from 'services/createCita'
import setFont2 from '../../services/setFont';

export default function Comfirm ({especialidad, horario, turno, doctor}){
  const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  const [size, setSize] = useState(localStorage.getItem('fontSize'))
  useEffect(()=> {
    if(font !== null) {
      setFont2(font, size)
    }
  },[])

  const enviarForm = () => {
    const iduser = JSON.parse(sessionStorage.getItem('usuario')).id

    createCita({
      idPaciente: iduser,
      especialidad,
      fecha: horario.toString(),
      turno,
      idDoctor: doctor
    })
  }

  return (<>
    <p>{especialidad}</p>
    <p>{horario.toString()}</p>
    <p>{turno}</p>
    <p>{doctor}</p>
    <button onClick={enviarForm}>enviar</button>
  </>)
}