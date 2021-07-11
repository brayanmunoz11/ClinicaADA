// const API_URL = 'https://api-login-heroku.herokuapp.com/signin'
const API_URL = 'http://localhost:4000/signin'
function sendLogin({formData}) {
  return fetch(API_URL, {
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