import {API_URL} from './API_KEYS.js'

function createPaciente(formData) {
  return fetch(`${API_URL}/crearPaciente`, {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(res => res.paciente);
}
export default createPaciente