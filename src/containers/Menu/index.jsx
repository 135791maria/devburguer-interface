
import { useState, useEffect } from "react";

import { useNavigate,useLocation } from "react-router-dom";
import { CardProduct } from "../../components/CardProduct";
import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton } from "./styles";
import { formatPrice } from "../../utils/formatPrice";
import { api } from "../../services/api";


export function Menu() {
const [categories, setCategories] = useState([]);
const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);


const { search } = useLocation();

const queryParams = new URLSearchParams(search);


const [activeCategory, setActiveCategory] = useState(() => {
  const categoryId = +queryParams.get('categoria'); // + => converte para number
  
 
  if (categoryId) {
    return categoryId;
  }

  return 0;
});

const navigate = useNavigate();


useEffect(() => {
  async function loadCategories() {
    try {
      const { data } = await api.get("/categories");
      const newCategories = [{ id: 0, name: "Todas" }, ...data];

      setCategories(newCategories);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
    }
  }

  async function loadProducts() {
    try {
      const { data } = await api.get("/products");

      const newProducts = data.map((product) => ({
        id: product.id, // Garantindo que o ID está sendo usado corretamente
        name: product.name, // Adicionando nome para exibição
        currencyValue: formatPrice(product.price), // Corrigido nome da variável
        ...product,
      }));

      setProducts(newProducts);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  }

  loadCategories();
  loadProducts();


}, []);


useEffect(() => {
if(activeCategory === 0){ 
  setFilteredProducts(products);
}else {
  const newFilteredProducts = products.filter(
    product => product.category_id === activeCategory,
  );
  setFilteredProducts(newFilteredProducts);
}
},[products, activeCategory]);


return (
  <Container>
    <Banner>
      <h1>
        O MELHOR
        <br />
        HAMBURGUER
        <br />
        ESTÁ AQUI!
        <span>Esse Cardápio Está Irresistível!</span>
      </h1>
    </Banner>

    {/* Renderizando categorias */}
    <CategoryMenu>
      {categories.map((category) => (
					<CategoryButton
          key={category.id}

          $isActiveCategory={category.id === activeCategory}
          onClick={() => {
            navigate(
              { 
              pathname: '/cardapio', 
              search: `?categoria=${category.id}` ,
            }, 
              { 
              replace: true 
            }, 

            );   
            setActiveCategory(category.id);
          }}
        >
          {category.name}
        </CategoryButton>
      ))}
    </CategoryMenu>






    {/* Renderizando produtos */}
    <ProductsContainer>
      {filteredProducts.map((product) => (
        <CardProduct product={product} key={product.id} />
       
      ))}
    </ProductsContainer>
  </Container>
);
}