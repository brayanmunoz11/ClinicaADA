import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`

export const TitleContainer = styled.div`
  margin: 20px 0 50px 20px;
  display: flex;
  justify-content: flex-start;
  color: ${props => props.theme.colors.primary};
  h1 {
    line-height: 50px;
    font-size: 2.4em;
  }
  .icon {
    font-size: 3em;
    margin-right: 20px;
    color: ${props => props.theme.colors.primary};
  }
`

export const PacienteContainer = styled.div`
  width: 90%;
  display: grid;
  margin: auto;
  grid-template-rows: 50px 1fr 100px;
  height: 100%;

`

export const BuscadorContainer = styled.div`

`

export const TablaContainer = styled.div`
  /* margin: 40px 0; */
  overflow: auto;
  max-height: calc(100vh - 300px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* flex-wrap: wrap; */
  /* flex-flow: row-wrap; */
  /* justify-content: space-evenly; */
  grid-gap: 40px;
  .pacienteContainer {
    justify-self: center;
    width: 300px;
    height: 250px;
    margin: 20px 10px;
    background-color: #afa;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    background-color: #fff;
    border-radius: 10px;
    transition: .3s;
    /* padding: 10px 15px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .pacienteInfo {
      margin: 20px 10px;
    }
    .infoItem {
      display: flex;
      justify-content: space-between;
      text-align: right;
      margin-bottom: 10px;
      p:first-child {
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
  .pacienteOpciones {
    h1 {
      margin-left: 10px;
      font-size: 1.2em;
      text-transform: uppercase;
      color: ${props => props.theme.colors.primary};
    }
  }
  .opcion {
    cursor: pointer;
    display: flex;
    padding: 10px 10px;
    transition: .3s;
    .icon {
      width: 20px;
      margin: 0 10px 0 0;
      color: ${props => props.theme.colors.primary};
      pointer-events: none;
      font-size: 1.1em;
    }
    p {
      pointer-events: none;
    }
    &:hover {
      background-color: #ccc;
    }
  }
`

export const AnadirContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .button {
    background: ${props => props.theme.colors.primary};
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.3em;
    padding: 10px 20px;
  }
`