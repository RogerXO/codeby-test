import styles from "./ProductCard.module.css";

function ProductCard({ id, name, imgUrl, price, sellingPrice }) {
  const maskedPrice = (price / 100).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const maskedSellingPrice = (sellingPrice / 100).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const discount = Math.round((price / sellingPrice - 1) * 100)

  return (
    <div key={id} className={styles.productCard}>
      <div className={styles.image}>
        <img src={imgUrl} alt="Produto" />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <div className={styles.price}>
          <span> {maskedPrice}</span>
          <div className={styles.discount}>
            <p>{maskedSellingPrice}</p>
            <p className={styles.off}> -{discount}% de desconto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
