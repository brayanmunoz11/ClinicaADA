import {API_URL} from './API_KEYS.js'

function createCama(formData) {
  return fetch(`${API_URL}/crearCama`, {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(res => res.camas);
}
export default createCama