import logo from "./logo.svg";
import "./App.css";

import Header from "./components/layout/Header";
import Container from "./components/layout/Container";
import Product from "./components/product/Product";
import Total from "./components/layout/Total";

function App() {
  return (
    <div>
      <Container layout="cartList">
        <Header />
        <Product />
        <Total />
      </Container>
    </div>
  );
}

export default App;
