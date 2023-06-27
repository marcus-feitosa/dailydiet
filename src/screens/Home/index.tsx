import { Card} from "../../components/Card";
import { Header } from "../../components/Header";
import { Container } from "./styles";


export function Home(){
    return(
     <Container>
             <Header />
             <Card percentage={86.79} text='das refeições dentro da dieta'/>
             </Container>
    )
}