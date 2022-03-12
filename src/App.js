import logo from "./logo.svg";
import "./App.css";

import Header from "./components/layout/Header";
import Container from "./components/layout/Container";
import Product from "./components/product/Product";

function App() {
  return (
    <div>
      <Container local="cartList">
        <Header />
        <Product />
      </Container>
    </div>
  );
}
  
export default App;
