import styled from "styled-components/native"


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    padding: 24px;
`;


export const AddText = styled.Text`
     margin-top: 24px;
     margin-bottom: 12px;
     color: ${({theme}) => theme.COLORS.GRAY_900};
     font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
     font-size: ${({theme}) => theme.FONT_SIZE.MD};
`;