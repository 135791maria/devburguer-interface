
import propTypes from "prop-types";
import { ContainerButton } from "./styles"


export function Button({children}) {

return <ContainerButton>{children}</ContainerButton>


}
Button.propTypes = {
children: propTypes.string,
}