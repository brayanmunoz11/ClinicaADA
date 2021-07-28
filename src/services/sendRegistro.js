import {API_URL} from './API_KEYS.js'

function sendRegistro({formData}) {
  return fetch(`${API_URL}/signup`, {
    method: 'POST',
    body: formData,
  })
  .then(res => res.json())
  .then(res => {
    if (res.message === 'user created') {
      sessionStorage.setItem('usuario', JSON.stringify(res.user))
      // history.push('/Clinica')
    }
    return res.message
  });
}
export default sendRegistro