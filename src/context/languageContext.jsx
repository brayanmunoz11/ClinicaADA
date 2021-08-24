import React, {useState, useEffect} from 'react'

const Context = React.createContext({})

export function LanguageContext ({children}) {
  // const lan = JSON.parse(localStorage.getItem(''))
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
      Paciente: 'Paciente',
      Concluir: 'Concluir',
      AdministrarPersonal: 'Administrar Personal',
      AdministrarPacientes: 'Administrar Pacientes',
      AdministrarCamas: 'Administrar Camas',
      Sexo: 'Sexo',
      Vigencia: 'Vigencia',
      CentroAsistencial: 'Centro Asistencial',
      TipoSeguro: 'Tipo de seguro',
      Cama: 'Cama',
      Ocupada: 'Ocupada',
      AnadirPaciente: 'Añadir Paciente',
      AnadirPersonal: 'Añadir Personal',
      AnadirCama: 'Añadir Cama',
      Consultas: 'Consultas',
      Estado: 'Estado',
      Opciones: 'Opcions',
      Editar: 'Editar',
      Eliminar: 'Eliminar',
      Perfil: 'Ver perfil',
      Correo: 'Correo',
      Aceptar: 'Aceptar',
      Cancelar: 'Cancelar',
      direccion: 'Direccion',
      Informacion: 'Informacion Personal',
      ConfirmDelete: '¿Estas seguro de eliminar?',
      FechaNac: 'Fecha de nacimiento',
      Panel: 'Panel de informacion',
      FamInfo: 'Informacion de familiares',
      Parentesco: 'Parentesco',
      Enviar: 'Enviar',
      CitaInfo: 'Informacion de Citas',
      ConcludeCita: '¿Estas seguro de concluir la cita?'
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
      Paciente: 'Patient',
      Concluir: 'Conclude',
      AdministrarPersonal: 'Manage staff',
      AdministrarPacientes: 'Manage patients',
      AdministrarCamas: 'Manage beds',
      Sexo: 'Sex',
      Vigencia: 'Vigence',
      CentroAsistencial: 'Center',
      TipoSeguro: 'Secure type',
      Cama: 'Bed',
      Ocupada: 'Ocuped',
      AnadirPaciente: 'Add Patient',
      AnadirPersonal: 'Add Staff',
      AnadirCama: 'Add Bed',
      Consultas: 'Appointments',
      Estado: 'State',
      Opciones: 'Options',
      Editar: 'Edit',
      Eliminar: 'Delete',
      Perfil: 'See Profile',
      Correo: 'E-mail',
      Aceptar: 'Accept',
      Cancelar: 'Cancel',
      direccion: 'Address',
      Informacion: 'Personal Information',
      ConfirmDelete: 'Are you sure to delete?',
      FechaNac: 'Date of birth',
      Panel: 'Information Panel',
      FamInfo: 'Family information',
      Parentesco: 'Relationship',
      Enviar: 'Send',
      CitaInfo: 'Informacion of appointments',
      ConcludeCita: 'Are you sure to conclude the appointment?'
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