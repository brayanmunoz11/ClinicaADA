import {API_URL} from './API_KEYS.js'

function sendLogin({formData}) {
  return fetch(`${API_URL}/signin`, {
    method: 'POST',
    body: formData,
  })
  .then(res => res.json())
  .then(res => {
    (res.valid) ? sessionStorage.setItem('usuario', JSON.stringify(res.user)): null
    return res.valid
  });
}
export default sendLogin