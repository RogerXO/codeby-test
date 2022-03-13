import styles from "./FinishButton.module.css";

function FinishButton() {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Finalizar Compra</button>
    </div>
  );
}

export default FinishButton;
