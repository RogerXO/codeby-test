import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

import Header from "./components/layout/Header";
import Container from "./components/layout/Container";
import Product from "./components/product/Product";
import Total from "./components/layout/Total";
import FinishButton from "./components/layout/FinishButton";

function App() {
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

  return (
    <div>
      <Container layout="cartList">
        <Header />
        <Product products={products} />
        <Total />
        <FinishButton/>
      </Container>
    </div>
  );
}

export default App;
