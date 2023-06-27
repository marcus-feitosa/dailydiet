import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;



  padding: 30px; /*vaisair depois para entrar a safeAreaView */
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Icon = styled.Image`
  width:  40px;
  height: 40px;
  border-radius: 8px;
`;