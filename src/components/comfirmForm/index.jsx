import React, {useState, useEffect} from 'react'
import { ConfirmContainer, ConfirmSubContainer, ConfirmTitle, ConfirmDates, ConfirmButton, ConfirmItem } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCloudMoon, faTag, faUserMd } from '@fortawesome/free-solid-svg-icons'
import createCita from 'services/createCita'
import setFont2 from 'services/setFont';

export default function Comfirm ({especialidad, horario, turno, doctor}){
  console.log(doctor)
  const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  const [size, setSize] = useState(localStorage.getItem('fontSize'))
  useEffect(()=> {
    if(font !== null) {
      setFont2(font, size)
    }
  },[])

  const enviarForm = () => {
    const iduser = JSON.parse(sessionStorage.getItem('usuario')).id

    // createCita({
    //   idPaciente: iduser,
    //   especialidad,
    //   fecha: horario.toString(),
    //   turno,
    //   idDoctor: doctor
    // })
  }

  return (<>
    <ConfirmContainer>
      <ConfirmSubContainer>
        <ConfirmTitle>
          <h1>Confirmar Cita</h1>
        </ConfirmTitle>
        <ConfirmDates>
          <ConfirmItem>
            <div className="left">
              <FontAwesomeIcon icon={faTag} className='icon' />
              <p>Especialidad</p>
            </div>
            <div className="right">
              <p>{especialidad}</p>
            </div>
          </ConfirmItem>
          <ConfirmItem>
            <div className="left">
              <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
              <p>Fecha</p>
            </div>
            <div className="right">
              <p>{horario.fecha}</p>
            </div>
          </ConfirmItem>
          <ConfirmItem>
            <div className="left">
              <FontAwesomeIcon icon={faCloudMoon} className='icon' />
              <p>Turno</p>
            </div>
            <div className="right">
              <p>{turno}</p>
            </div>
          </ConfirmItem>
          <ConfirmItem>
            <div className="left">
              <FontAwesomeIcon icon={faUserMd} className='icon' />
              <p>Doctor</p>
            </div>
            <div className="right">
              <p>{doctor.name}</p>
            </div>
          </ConfirmItem>
        </ConfirmDates>
        <ConfirmButton>
          <button onClick={enviarForm}>enviar</button>
        </ConfirmButton>
      </ConfirmSubContainer>
    </ConfirmContainer>
  </>)
}