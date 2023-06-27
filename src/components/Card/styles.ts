import styled from "styled-components/native";
import { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

export const CardContainer = styled.TouchableOpacity<{ percentage: number }>`

  background-color: ${({ percentage, theme }) => percentage > 50.00 ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
  padding: 16px;
  border-radius: 8px;

  flex-direction: row;
  align-itens: center;
  justify-content: center;

`;


export const HeaderCardContainer = styled.View`
  width: 100%;
 


  flex-direction: column;
  align-items: center;
  justify-content: center;
  ;

`;


export const Percentage = styled.Text`

${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_900};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  
`;

export const Text = styled.Text`

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  
`;

