import React, { useEffect, useState } from "react";
import styles from "./CartStorage.module.css";
export const CartStorage = (item) => {
  const { id, image, price, rating, name } = item;
    const [show, setShow] = useState(true);
  const deletediv = () => {
    console.log("delete");
  };
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className={styles.MainDiv}>
        <div>
          <img className={styles.imas} src={image} />
        </div>
        <div className={styles.cartname}>
          {" "}
          <p>{name}</p>
        </div>
        <img
          onClick={deletediv}
          className={styles.deleteIcan}
          src="https://img.icons8.com/fluency-systems-regular/344/filled-trash.png"
        />
        <div className={styles.price}>
          {" "}
          <button onClick={handleDec}>-</button>
          {count}
          <button onClick={handleInc}>+</button>
        </div>

        <div> {}</div>
      </div>
    </>
  );
};
