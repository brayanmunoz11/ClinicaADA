import React from 'react'

export default function ButtonAnadir ({type, setAnadir}){
  const changeAnadir = () => {
    setAnadir(true)
  }
  return (<>
    <button onClick={changeAnadir}>Añadir {type}</button>
  </>)
}