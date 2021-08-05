import {API_URL} from './API_KEYS.js'

function changeCama(json) {
  return fetch(`${API_URL}/editarPaciente`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  })
  .then(res => res.json())
  .then(res => res.pacientes);
}
export default changeCama