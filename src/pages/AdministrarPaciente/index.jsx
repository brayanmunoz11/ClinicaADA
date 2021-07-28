import React, { useState, useEffect  } from 'react'
import { Container, TitleContainer, PacienteContainer, BuscadorContainer, TablaContainer, AnadirContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
import Tabla from 'components/Tabla'
import getPacientes from 'services/listarPacientes'

export default function AdministrarPaciente ({}){
  const [pacientes, setPacientes] = useState([])
  useEffect(()=> {
    getPacientes()
      .then(setPacientes)
  },[])

  return (<>
    <Container>
      <TitleContainer>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className='icon'/>
        <h1>Administrar Pacientes</h1>
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
                    <th className='vigencia'>Vigencia</th>
                    <th>Tipo de Seguro</th>
                    <th>Centro asistencial</th>
                    <th className='editar'>Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    pacientes.map((paciente, index) =>
                      <tr key={paciente.id}>
                        <td>{paciente.nombre}</td>
                        <td>{paciente.sexo}</td>
                        <td>{paciente.vigencia}</td>
                        <td>{paciente.tipoSeguro}</td>
                        <td>{paciente.centro}</td>
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
          <button>Añadir Paciente</button>
        </AnadirContainer>
      </PacienteContainer>
    </Container>
  </>)
}