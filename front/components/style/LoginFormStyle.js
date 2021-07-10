import styled from "styled-components";
import { Button } from "antd";


// export const LoginButton = styled.button`
//   width:180px;
//   background-color: white;
//   border-radius: 8px;
//   &:hover {
//     background-color:skyblue
//   }
// `

export const LoginButton = styled(Button)`
  &&& {
  width:180px;
  // background-color: white;
  border-radius: 8px;
  &:hover {
    background-color:skyblue
  }
`;

export const LoginFormWrapper = styled.div`
  margin-top: 20px;
  margin-left: 10px;

  `
  export const LoginButtonWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  `

