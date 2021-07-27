import {API_URL} from './API_KEYS.js'
// import {Link, useHistory} from 'react-router-dom'

function sendLogin({formData}) {
  let path = '';
  return fetch(`${API_URL}/signin`, {
    method: 'POST',
    body: formData,
  })
  .then(res => res.json())
  .then(res => {
    (res.valid) ? sessionStorage.setItem('usuario', JSON.stringify(res.user)): null
    if(res.user.tipoUsuario === 'doctor') {
      path = 'ClinicaDoctor'
    }
    else if (res.user.tipoUsuario === 'paciente') {
      path = '/Clinica'
    }

    return {
      valid: res.valid,
      path
    }
  });
}
export default sendLogin