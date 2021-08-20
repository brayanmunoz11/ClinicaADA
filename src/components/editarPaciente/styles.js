import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,.6);
  /* z-index: 10000; */
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const EditarContainer = styled.div`
  background-color: #fff;
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h1 {
    text-align: center;
  }
  .editarItem {
    width: 60%;
  }
  .buttons {
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    button {
      background: ${props => props.theme.colors.primary};
      border: none;
      cursor: pointer;
      color: #fff;
      font-size: 1.3em;
      padding: 10px 20px;
    }
  }
`