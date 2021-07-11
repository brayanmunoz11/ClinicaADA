// const API_URL = 'https://api-login-heroku.herokuapp.com/signin'
// import { useHistory } from "react-router-dom";
// const history = useHistory()


const API_URL = 'http://localhost:4000/signup'
function sendRegistro({formData}) {
  return fetch(API_URL, {
    method: 'POST',
    body: formData,
  })
  .then(res => res.json())
  .then(res => {
    console.log(res)
    if (res.message === 'user created') {
      sessionStorage.setItem('usuario', JSON.stringify(res.user))
      // history.push('/Clinica')
    }
    return res.message
  });
}
export default sendRegistro