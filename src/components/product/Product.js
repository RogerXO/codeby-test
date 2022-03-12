import styles from "./Product.module.css";

import { useState, useEffect } from "react";

import Container from "../layout/Container";
import ProductCard from "./ProductCard";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://codeby-test-fake-api.herokuapp.com/overTen", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setProducts(data.items))
      .catch((err) => console.log(err));
  }, []);
  console.log(products);

  return (
    <div>
      <Container layout="bottomLine">
        {products &&
          products.map((product) => (
            <ProductCard
              name={product.name}
              id={product.id}
              key={product.id}
              imgUrl={product.imageUrl}
              price={product.price}
              sellingPrice={product.sellingPrice}
            />
          ))}
      </Container>
    </div>
  );
}

export default Product;
