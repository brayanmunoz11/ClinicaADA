import styled from 'styled-components'
import { Form, Input, FormContainer, Title, InputContainer, Button } from './../Login/styles'

export const InputRegisterContainer = styled(InputContainer)`
  height: fit-content;
  p {
  color: #bf1650;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`

export const Apellidos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ApellidosContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`