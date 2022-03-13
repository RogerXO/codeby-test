import styles from "./Total.module.css";

import { useState, useEffect } from "react";

import FreeShipping from "./FreeShipping";

function Total() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [prices, setPrices] = useState([]);

  const totalValue = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

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

  useEffect(() => {
    const getTotal = bringTotal() / 100;
    setTotal(getTotal);
  }, [products]);

  function bringTotal() {
    return products.reduce(function (prev, cur) {
      return (prev += cur.sellingPrice);
    }, 0);
  }

  return (
    <div className={styles.bottomLine}>
      <div className={styles.total}>
        <h1>Total</h1>
        <h2>{totalValue}</h2>
      </div>
      {total >= 10 && <FreeShipping />}
    </div>
  );
}

export default Total;
