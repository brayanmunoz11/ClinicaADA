import styled from "styled-components";

export const ConfigContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  .titleContainer {
    margin: 20px 0 50px 20px;
    display: flex;
    justify-content: flex-start;
    color: ${props => props.theme.colors.primary};
  }
  .container {
    display: flex;
    margin: 20px 50px;
    .configItem {
      width: 200px;
      height: 200px;
      border: 1px solid ${props => props.theme.colors.primary};
      margin-right: 30px;
      cursor: pointer;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      .icon {
        font-size: 4em;
      }
    }
  }
`