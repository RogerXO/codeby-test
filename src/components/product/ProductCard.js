import styles from "./ProductCard.module.css";

function ProductCard({ id, name, imgUrl, price, sellingPrice }) {
  return (
    <div key={id} className={styles.productCard}>
      <div className={styles.image}>
        <img src={imgUrl} alt="Produto" />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <div className={styles.price}>
          <span> {(price/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
          <p>{(sellingPrice/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
