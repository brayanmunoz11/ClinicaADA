import styled from "styled-components";

export const InputContainer = styled.div`
  width: 70%;
  /* width: ${props => (props.apellido) ? 30 : 70}%; */
  /* min-width: 200px; */
  max-width: ${props => (props.apellido) ? '45%' : '100%'};
  height: 50px;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding-top: 20px;

  :focus + label span,
  :valid + label span
  {
    color: ${props => props.theme.colors.primary };
    transform: translateY(-150%)
  }

  :focus + label::after,
  :valid + label::after
  {
    right: 0;
  }
`
export const Label = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid #000;
  pointer-events: none;
  /* overflow: hidden; */

  span {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
    font-size: 14px;
  }

  ::after {
    content: '';
    width: 100%;
    height: 3px;
    background: ${props => props.theme.colors.gradients.primary};
    position: absolute;
    bottom: -1px;
    right: 100%;
    transition: all .3s ease;
  }
`

