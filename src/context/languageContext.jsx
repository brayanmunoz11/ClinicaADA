import React, {useState, useEffect} from 'react'

const Context = React.createContext({})

export function LanguageContext ({children}) {
  const [language, setLanguage] = useState('en')

  const texts = {
    es: {
      Perfil: 'Perfil',
      Formulario: 'Formulario de cita',
      Configuraciones: 'Configuraciones',
      Home: 'Volver al Home',
      Nombre: 'Nombre',
      Apellido: 'Apellido',
      CitasProgra: 'Citas Programadas',
      Fecha: 'Fecha',
      Hora: 'Hora',
      Horario: 'Horario',
      Especialidad: 'Especialidad',
      Sala: 'Sala',
      CitasResc: 'Citas Recientes',
      Cerrar: 'Cerrar Sesion',
      Turno: 'Turno',
      Extra: 'Informacion Extra',
      Ingresa: 'Ingresa Datos',
      Selecciona: 'Selecciona el doctor',
      Confirma: 'Comfirma la consulta',
      EligeEspecialidad: 'Elige una especialidad',
      EligeTurno: 'Elige un turno',
      Atras: 'Atras',
      Siguiente: 'Siguiente',
      Finalizar: 'Finalizar',
      Seleccionar: 'Seleccionar',
      CambiarIdioma: 'Cambiar Idioma',
      CambiarFuente: 'Cambiar Fuente',
    },
    en: {
      Perfil: 'Profile',
      Formulario: 'Appointment form',
      Configuraciones: 'Configurations',
      Home: 'Back to Home',
      Nombre: 'Name',
      Apellido: 'Last Name',
      CitasProgra: 'Scheduled appointments',
      Fecha: 'Date',
      Hora: 'Hour',
      Horario: 'Schedule',
      Especialidad: 'Specialty',
      Sala: 'Lounge',
      CitasResc: 'Recent appointments',
      Cerrar: 'Sign off',
      Turno: 'Shift',
      Extra: 'Extra Information',
      Ingresa: 'Enter Data',
      Selecciona: 'Choose a doctor',
      Confirma: 'Comfirm Date',
      EligeEspecialidad: 'Choose a specialty',
      EligeTurno: 'Choose a shift',
      Atras: 'Previus',
      Siguiente: 'Next',
      Finalizar: 'Finish',
      Seleccionar: 'Choose',
      CambiarIdioma: 'Change Language',
      CambiarFuente: 'Change Font',
    }
  }

  return <Context.Provider value={{
    language,
    setLanguage,
    texts
  }}>
  {children}
  </Context.Provider>
}

export default Context