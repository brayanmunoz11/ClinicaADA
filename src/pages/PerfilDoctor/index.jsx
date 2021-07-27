import React, { useEffect, useState } from 'react'
import PerfilComponent from 'components/perfil'
import { Container, TablaContainer } from './styles'
import Tabla from 'components/Tabla'
import getCitas from 'services/getCitas.js'

export default function PerfilDoctor({ }) {
  const [citas, setCitas] = useState([])

  useEffect(()=> {
    getCitas()
      .then(setCitas)
  },[])

  return (<>
    <Container>
      <PerfilComponent />
      <TablaContainer>
        <div className="ContainertablaPacientes">
          <Tabla>
            <div className="tablaDoctores">
              <table>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Horario</th>
                    <th>Paciente</th>
                    <th className="selecc">Perfil</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    citas.map((doctor, index) =>
                      <tr key={index} id={doctor.doctor}>
                        <td>{doctor.fecha}</td>
                        <td>{doctor.turno}</td>
                        <td>{doctor.paciente}</td>
                        <td>
                          <button>Ver Perfil</button>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </Tabla>
        </div>
      </TablaContainer>
    </Container>
  </>)
}