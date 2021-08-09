import styled from "styled-components";
import { Link } from "react-router-dom";

export const PerfilContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  padding: 20px 30px;
  grid-template-columns: 330px 1fr 300px;
  grid-gap: 20px;
`
export const TopPerfil = styled.div`
  display: grid;
  grid-template-rows: 140px auto;
  grid-gap: 40px;
`
export const InfoPerfil = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 10px;
  figure {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      height: 80%;
    }
  }
  .infoItem {
    :nth-of-type(-n+2) {
     margin-bottom: 5px;
    }
    span {
      font-size: 13px;
      font-weight: bold;
    }
    p {
      font-size: 16px;
    }
  }
  `
export const TopInputs = styled.div`
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  .info {
    .infoTitle {
      background-color: #E9E9E9;
      height: 40px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      p {
        text-transform: uppercase;
        font-size: .9em;
        font-weight: 600;
        /* letter-spacing: 1px; */
      }
    }
    .infoItem {
      height: 70px;
      /* background-color: #afa; */
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      .left {
        display: flex;
        align-items: center;
        font-size: .9em;
        p {
          width: 50px;
          font-weight: 600;
        }
      }
      .icon {
        font-size: 2em;
        margin-right: 20px;
        width: 28px;
      }
      .right p {
        font-size: .9em;
      }
    }
  }
`
export const MiddlePerfil = styled.div`
  display: grid;
`
export const BottomPerfil = styled.div`
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: #fff;
  border-radius: 10px; */
  height: 400px;
  
`
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 20px; */
  button {
    width: 100%;
    height: 40px;
    border: none;
    background-color: ${props => props.theme.colors.secondary};
    color: #fff;
    font-size: .9em;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 7px;
    cursor: pointer;
  }
`
export const Input = styled.input`
  height: 40px;
  font-size: 1em;
  padding: 5px;
`