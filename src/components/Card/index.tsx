import { CardContainer, Percentage, Text, HeaderCardContainer} from "./styles";

import { ArrowUpRight } from "phosphor-react-native";
type CardProps = {
    percentage: number;
    text: string;
}


export function Card({percentage, text}:CardProps){
    return (
    <CardContainer percentage={percentage}>
       
      <HeaderCardContainer>
        <Percentage>{percentage}%</Percentage>
        <Text>{text}</Text>
      </HeaderCardContainer>
      <ArrowUpRight size={18}/>
    </CardContainer>
  )
}
    
  
  