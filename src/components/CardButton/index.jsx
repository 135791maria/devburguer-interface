

import { ContainerButton } from "./style";
import Botâo from "../../assets/botâo.svg";



export function CardButton({...props}) {
return(


    <ContainerButton {...props}>
    <img src={Botâo} alt="Carrinho-de-compras"/>
    </ContainerButton>



);

}