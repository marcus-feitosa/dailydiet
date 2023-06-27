import { Container,Logo, Icon} from "./styles";
import logoIMG from  '@assets/logo.png'
import iconIMG from '@assets/icon.png'


export function Header(){
    return(
        <Container>
           <Logo source={logoIMG}/>
           <Icon source={iconIMG}/>
        </Container>
    )
}