import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";

import { InputRegisterContainer, Apellidos, ApellidosContainer } from './styles'
import { Form, FormContainer, Title, Button } from './../Login/styles'
import Errormodal from 'components/errormodal/errormodal'
import Loader from 'components/loader'
import Input from 'components/Input'

import sendRegistro from 'services/sendRegistro';
import getInfoDNI from 'services/getInfoDNI';

export default function RegisterForm({ }) {
  let history = useHistory();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const [datesDNI, setDatesDNI] = useState({
    nombres: '',
    paterno: '',
    materno: ''
  })

  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: 'onBlur',
    criteriaMode: "all"
  })

  const onSumbit = (data, e) => {
    e.preventDefault()
    const newUser = {
      nombre: data.nombre || datesDNI.nombres,
      apellidoP: data.apellidoP || datesDNI.paterno,
      apellidoM: data.apellidoM || datesDNI.materno,
      dni: data.dni || datesDNI.dni,
      sexo: datesDNI.sexo,
      correo: data.correo,
      contrasena: data.password,
      tipoUsuario: 'paciente'
    }
    console.log(newUser)
    // sendRegistro(newUser)
    //   .then(res => {
    //     setLoading(false)
    //     if (res === 'user created') {
    //       return history.push('/ClinicaPaciente')
    //     } else {
    //       setError(true)
    //       setMessage(res)
    //     }
    //   })
  }

  const dni = register('dni', {
    required: 'username is required',
    minLength: {
      value: 8,
      message: 'El dni deben ser 8 digitos'
    }
  })
  const validateNumbers = (evt) => {
    var ch = String.fromCharCode(evt.which);
    if (!(/[0-9]/.test(ch))) {
      evt.preventDefault();
    }
  }
  const getInfo = (evt) => {
    const dni = evt.target.value
    if (dni.length === 8) {
      // getInfoDNI(dni)
      //   .then(res => {
      //     setDatesDNI(res)
      //     console.log(res)
      //   })
      setDatesDNI({
        dni: '72188379',
        materno: "ROJAS",
        nombres: "OSCAR FERNANDO",
        paterno: "CABELLOS",
        sexo: "M",
      })

    } else {
      setDatesDNI({
        nombres: '',
        paterno: '',
        materno: ''
      })
    }
  }

  const nombres = register('name')
  const apellidoP = register('apellidoP')
  const apellidoM = register('apellidoM')

  return (
    <>
      {(loading) ? <Loader /> : null}
      {(error) ? <Errormodal setError={setError} message={message} /> : null}
      <FormContainer>
        <Form onSubmit={handleSubmit(onSumbit)}>
          <Title>Registro</Title>
          <InputRegisterContainer>
            <Input
              name='dni'
              label='DNI'
              maxLength='8'
              onKeyPress={validateNumbers}
              onChange={(evt) => {
                dni.onChange(evt)
                getInfo(evt)
              }}
              onBlur={dni.onBlur}
              ref={dni.ref}
            />
            <ErrorMessage
              errors={errors}
              name="dni"
              maxLength='8'
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message], index) => (
                    <span key={index}>
                      <p>{message}</p>
                    </span>
                  ))
                  : null;
              }}
            />
            <Input
              name='name'
              label='Nombre'
              value={datesDNI.nombres}
              onChange={nombres.onChange}
              onBlur={nombres.onBlur}
              ref={nombres.ref}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ messages }) => {
                // console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
            <Apellidos>
              <ApellidosContainer>
                <Input
                  name='apellidoP'
                  label='Apellido Paterno'
                  value={datesDNI.paterno}
                  apellido={true}
                  onChange={apellidoP.onChange}
                  onBlur={apellidoP.onBlur}
                  ref={apellidoP.ref}
                />
                <Input
                  name='apellidoM'
                  label='Apellido Materno'
                  value={datesDNI.materno}
                  apellido={true}
                  onChange={apellidoM.onChange}
                  onBlur={apellidoM.onBlur}
                  ref={apellidoM.ref}
                />
              </ApellidosContainer>
            </Apellidos>
            <Input
              name='correo'
              label="Email"
              {...register('correo', {
                pattern: {
                  value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+/g,
                  message: 'El correo debe seguir el patron xxxx@xxxx.xxxx'
                }
              })}
            />
            <ErrorMessage
              errors={errors}
              name="correo"
              render={({ messages }) => {
                // console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
            <Input
              name='password'
              label="Contraseña"
              {...register('password', {
                required: 'password is required',
                minLength: {
                  value: 3,
                  message: 'La contraseña debe tener 8 digitos como minimo(por ahora solo 123 xfa)'
                }
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ messages }) => {
                // console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
            <Input
              name='passwordC'
              label="Confirmar contraseña"
              {...register('passwordC', {
                required: 'password is required',
                minLength: {
                  value: 3,
                  message: 'La contraseña debe tener 8 digitos como minimo(por ahora solo 123 xfa)'
                }
              })}
            />
            <ErrorMessage
              errors={errors}
              name="passwordC"
              render={({ messages }) => {
                // console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
          </InputRegisterContainer>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button type='submit'>Registrate</Button>
            <span style={{ marginTop: '10px', fontSize: '12px' }}>¿Ya tienes una cuenta? <Link to='/login'>Logeate</Link></span>
          </div>
        </Form>
      </FormContainer>
    </>
  )
}