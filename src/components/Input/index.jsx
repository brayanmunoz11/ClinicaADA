import React from 'react'
import {InputContainer, Input, Label} from './styles'

function MyInput({name, maxLength, label, ...rest }, ref) {
  return (
    <>
      <InputContainer apellido={rest.apellido}>
        <Input
          autoComplete="off"
          name={name}
          type={(name.includes('password')) ? 'password' : 'text'}
          required
          maxLength={maxLength}
          {...rest}
        />
        <Label>
          <span>{label}</span>
        </Label>
      </InputContainer>
    </>
  )
}
export default React.forwardRef(MyInput)