import {API_URL} from './API_KEYS.js'

function terminarCita({idCita}) {
  // const iddoc = JSON.parse(sessionStorage.getItem('usuario')).id
  return fetch(`${API_URL}/terminarCita/${idCita}`)
    .then(res => res.json())
    .then(res => res.citas);
}
export default terminarCita