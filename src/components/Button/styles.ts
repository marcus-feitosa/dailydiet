import styled from "styled-components/native";

export const CustomButton = styled.TouchableOpacity`
 
    background-color: ${({theme}) => theme.COLORS.GRAY_800};
    padding: 16px;
    border-radius: 8px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px
`;


export const ButtonText = styled.Text`
    
     color: ${({theme}) => theme.COLORS.WHITE};
     font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
     font-size: ${({theme}) => theme.FONT_SIZE.MD};
`;