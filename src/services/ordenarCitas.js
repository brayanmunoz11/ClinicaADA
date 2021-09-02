import {API_URL} from './API_KEYS.js'

function ordenarCita() {
  const iddoc = JSON.parse(sessionStorage.getItem('usuario')).id
  return fetch(`${API_URL}/ordenarcitas/${iddoc}`)
    .then(res => res.json())
    .then(res => res.citas);
}
export default ordenarCita