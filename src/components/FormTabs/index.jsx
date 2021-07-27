import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Formulario from "pages/Formulario";
import ChooseDoctor from "components/ChooseDoctor";
import useForm from "../../hooks/useForm";
import Comfirm from "components/comfirmForm";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
      style={{height: "100%"}}
    >
      {value === index && (
        <Box p={3} style={{height: "100%"}}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default function TabsWrappedLabel({tabState}) {
  const {
    especialidad,
    horario,
    turno,
    doctor,
    extra,
    updateEspecialidad,
    updateHHorario,
    updateTurno,
    updateDoctor,
    updateExtra,
    resetFilters } = useForm()

  // useEffect(()=> {
  //   console.log(horario)
  //   console.log(especialidad)
  //   console.log(turno)
  // },[horario, especialidad, turno])

  return (
    <div style={{overflow: (tabState === 'one') ? 'unset': 'auto'}}>
      <TabPanel value={tabState} index="one">
        <Formulario
          especialidad={especialidad}
          updateEspecialidad={updateEspecialidad}
          horario={horario}
          updateHHorario={updateHHorario}
          turno={turno}
          updateTurno={updateTurno}
          updateExtra={updateExtra}
        />
      </TabPanel>
      <TabPanel value={tabState} index="two">
        <ChooseDoctor
          updateDoctor={updateDoctor}
        />
      </TabPanel>
      <TabPanel value={tabState} index="three">
        <Comfirm
          especialidad={especialidad.value}
          horario={horario}
          turno={turno.value}
          doctor={doctor}
        />
      </TabPanel>
    </div>
  );
}
