import { API_URL } from './API_KEYS.js'

function buscarPaciente(nombre) {
  const iddoc = JSON.parse(sessionStorage.getItem('usuario')).id
  return fetch(`${API_URL}/buscarpaciente/${iddoc}`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({nombre: nombre})
    
  })
  .then(res => res.json())     
  .then(res => res.b)
    
    
}
export default buscarPaciente