import styled from "styled-components";
import { Link } from "react-router-dom";

export const PerfilContainer = styled.div`
  /* width: 50%; */
  /* background-color: #000; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PerfilC = styled.div`
  margin: 0 20px;
  background-color: #fff;
  width: 350px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const PerfilImage = styled.div`
  width: 90%;
  height: 20%;
  /* background-color: #ccc; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6em;
`
export const PerfilInfo = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 40px 30px;

  .info {
    display: flex;
    justify-content: space-between;
  }
  .info p {
    width: 50%;
  }
  .info p:first-child {
    font-weight: bold;
  }
`
export const PerfilClose = styled.div`
  width: 90%;
  height: 20%;
  /* background-color: #ccc; */
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LinkB = styled(Link)`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  width: 150px;
  height: 50px;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 20px;
`