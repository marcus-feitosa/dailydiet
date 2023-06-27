import { Button } from "@components/Button";
import { Text } from "react-native";
import { Card} from "../../components/Card";
import { Header } from "../../components/Header";
import { Container,AddText } from "./styles";


export function Home(){
    return(
     <Container>
             <Header />
                <Card percentage={86.79} text='das refeições dentro da dieta'/>
        
                <AddText>Refeições</AddText>
                <Button text='Nova refeição' showAddButton/>
             </Container>
    )
}