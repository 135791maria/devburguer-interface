


import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { Table } from "../index";
import {ProductImage, ButtonGroup, TrashImage, ProductTotalPrice} from "./styles"
import trashIcom from "../../assets/trash.svg";


export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct} = useCart();

  return (
    <Table.Root>
      <Table.Header>
      <Table.Tr>
         <Table.Th></Table.Th>
          <Table.Th>Items</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
          </Table.Tr>
      </Table.Header>

      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (

            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url}/>
              </Table.Td>

              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
        
              <Table.Td>
                <ButtonGroup>
                <button onClick={() => decreaseProduct(product.id)}>-</button>
                {product.quantity}
                <button onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>
        
              <Table.Td>
                <ProductTotalPrice>
                {formatPrice(product.quantity * product.price)}
                </ProductTotalPrice>
              </Table.Td>

              <Table.Td>
                <TrashImage src={trashIcom} alt="lixeira" onClick={() => deleteProduct(product.id)}/>
              </Table.Td>
           </Table.Tr>
          
          ))
        ) : ( 

          <Table.Tr>
            <Table.Td>Seu carrinho está vazio</Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  );
}



