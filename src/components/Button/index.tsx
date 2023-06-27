import { CustomButton, ButtonText } from "./styles"
import {Plus, PencilSimpleLine} from 'phosphor-react-native'

type ButtonProps = {
    text:string;

    showAddButton?:boolean; 
    showEditButton?:boolean;
}

export function Button({text, showAddButton=false, showEditButton=false}:ButtonProps){
    return(
        <CustomButton>
             {
                showEditButton&&
                <PencilSimpleLine size={20} color="#fff" />
            }
            {
                showAddButton &&
                <Plus size={20} color="#fff" />
            }
           

            <ButtonText>{text}</ButtonText>
            
        </CustomButton>
    )
}