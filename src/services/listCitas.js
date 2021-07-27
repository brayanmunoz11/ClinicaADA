import {API_URL} from './API_KEYS.js'

function listCitas({estado}) {
  const iduser = JSON.parse(sessionStorage.getItem('usuario')).id
  return fetch(`${API_URL}/citasUserPro/${iduser}/${estado}`)
    .then(res => res.json())
    .then(res => res.citas);
}
export default listCitas