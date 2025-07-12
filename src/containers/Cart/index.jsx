


import Image from "../../assets/image.svg";
import { CartItems} from "../../components/CartItems";
import {CartResume} from "../../components/CartResume";
import {Container, Banner, Title, Content} from "./styles";

export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Image} alt="logo-devburguer" />;
            </Banner>

            <Title>Checkout-Pedido</Title>
            <Content>
            <CartItems />
                <CartResume />
            </Content>
        </Container>

    );
}