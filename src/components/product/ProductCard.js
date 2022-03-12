import styles from "./ProductCard.module.css";

function ProductCard({ id, name, imgUrl, price, sellingPrice }) {
  return (
    <div key={id}>
      <img src={imgUrl} alt="Imagem do produto" />
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{sellingPrice}</p>
      </div>
    </div>
  );
}

export default ProductCard;
