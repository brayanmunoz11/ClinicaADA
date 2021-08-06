import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormContainer, Title, InputContainer, Button } from './styles'
import { Link, useHistory } from 'react-router-dom'
// import loginService from './../../services/loginService.js'
import MyInput from './../Input'

export default function LoginForm({}) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()
  let history = useHistory()

  const onSumbit = (data, e) => {
    e.preventDefault()
    //data => {username, password}
    // loginService(data).then((res) => {
    //   if (res.token) {
    //     sessionStorage.setItem('jwt', res.token)
    //     history.push('/workspace')
    //   }
    //   if(res.error) {
    //     console.log(res.error)
    //   }
    // })
  }

  const onError = (errors, e) => {
    const errorInputs = Object.keys(errors)
    errorInputs.forEach((input) => console.log(errors[input]))
  }

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSumbit, onError)}>
          <Title>Login</Title>
          <InputContainer>
            <MyInput
              name="username"
              label="Usuario"
              {...register('username', { required: 'username is required' })}
            ></MyInput>
            <MyInput
              name="password"
              label="Contraseña"
              {...register('password', {required: 'password is required'})}
            ></MyInput>
          </InputContainer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Button type="submit">Login</Button>
            <span style={{ marginTop: '10px', fontSize: '12px' }}>
              ¿No tienes una cuenta? <Link to="/Register">Registrate</Link>
            </span>
            <span style={{ marginTop: '10px', fontSize: '12px' }}>
              ¿No te acuerdas tu contraseña?
            </span>
          </div>
        </Form>
      </FormContainer>
    </>
  )
}
//Arreglar los estilos en linea IMPORTANTE
