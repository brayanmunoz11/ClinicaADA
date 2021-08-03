import React, { useState, useEffect  } from 'react'
import { Container, TitleContainer, PacienteContainer, BuscadorContainer, TablaContainer, AnadirContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
import Tabla from 'components/Tabla'
import getAllDoctores from 'services/getAllDoctores'
import {Link} from 'react-router-dom'
import ButtonAnadir from 'components/buttonAnadir'
import Anadir from 'components/anadir'

export default function AdministrarPersonal ({}){
  const [doctores, setDoctores] = useState([])
  const [anadir, setAnadir] = useState(false)
  useEffect(()=> {
    getAllDoctores()
      .then(setDoctores)
  },[])

  return (<>
    {
      (anadir)
      ? <Anadir type='Personal'  setAnadir={setAnadir} setDoctores={setDoctores}/>
      : null
    }
    <Container>
      <TitleContainer>
        <Link to='/ClinicaAdministrador'>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className='icon'/>
        </Link>
        <h1>Administrar Personal</h1>
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
                    <th>Nombre</th>
                    <th className='sexo'>Sexo</th>
                    <th>Especialidad</th>
                    <th className='vigencia'>Horario</th>
                    <th className='editar'>Eliminar</th>
                    <th className='editar'>Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    doctores.map((doctor, index) =>
                      <tr key={doctor.id}>
                        <td>{doctor.nombre}</td>
                        <td>{doctor.sexo}</td>
                        <td>{doctor.especialidad}</td>
                        <td>{doctor.turno}</td>
                        <td>
                          <button>Eliminar</button>
                        </td>
                        <td>
                          <button>Editar</button>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </Tabla>
        </TablaContainer>
        <AnadirContainer>
          <ButtonAnadir type='Personal' setAnadir={setAnadir}/>
        </AnadirContainer>
      </PacienteContainer>
    </Container>
  </>)
}