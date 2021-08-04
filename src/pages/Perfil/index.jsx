import React, { useEffect } from 'react'
import { Container, TablesContainer } from './styles'
import PerfilComponent from 'components/perfil'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useState } from 'react';
import listCitas from 'services/listCitas';
import Context from '../../context/languageContext';
import { useContext } from 'react';

export default function Perfil({ }) {
  const [citasPro, setCitasPro] = useState([])
  const [citasTer, setCitasTer] = useState([])
  const {language, setLanguage, texts} = useContext(Context)

  useEffect(() => {
    console.log(texts)
    listCitas({ estado: 'programada' })
      .then(setCitasPro)
    listCitas({ estado: 'terminada' })
      .then(setCitasTer)
  }, [])

  useEffect(()=> {
  },[language])

  const click = () => {
    setLanguage('en')
  }

  return (<>
    <Container>
      <PerfilComponent/>
      <TablesContainer>
        <div className="programadas">
          <h1>{texts[language].CitasProgra}</h1>
          <PerfectScrollbar>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>{texts[language].Fecha}</th>
                    <th>{texts[language].Hora}</th>
                    <th>{texts[language].Especialidad}</th>
                    <th>{texts[language].Sala}</th>
                    <th>Doctor</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    citasPro.map((cita) =>
                      <tr key={cita.idCita}>
                        <td>{cita.fecha}</td>
                        <td>{cita.turno}</td>
                        <td>{cita.especialidad}</td>
                        <td>Sala</td>
                        <td>{cita.doctor}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </PerfectScrollbar>
        </div>

        <div className="recientes">
          <h1>{texts[language].CitasResc}</h1>
          <PerfectScrollbar>
            <div className="tabla">
              <table>
                <thead>
                  <tr>
                    <th>{texts[language].Fecha}</th>
                    <th>{texts[language].Hora}</th>
                    <th>{texts[language].Especialidad}</th>
                    <th>{texts[language].Sala}</th>
                    <th>Doctor</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    citasTer.map((cita) =>
                      <tr key={cita.idCita}>
                        <td>{cita.fecha}</td>
                        <td>{cita.turno}</td>
                        <td>{cita.especialidad}</td>
                        <td>Sala</td>
                        <td>{cita.doctor}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </PerfectScrollbar>
        </div>
      </TablesContainer>
    </Container>
  </>)
}