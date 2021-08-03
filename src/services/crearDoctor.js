import {API_URL} from './API_KEYS.js'

function createDoctor(formData) {
  return fetch(`${API_URL}/crearDoctor`, {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(res => res.doctores);
}
export default createDoctor