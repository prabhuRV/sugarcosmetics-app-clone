import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CheckOut.module.css";

function CheckOut() {
  return (
    <div id={styles.parent}>
      <div id={styles.main}>
        <h2 id={styles.h2}>Order Details</h2>
        <div id={styles.info}>
          <div>
            <h5>Name: </h5>
          </div>
          <div>
            <h5>Address: </h5>
          </div>
          <div>
            <h5>Total Price : </h5>
          </div>
        </div>

        <div id={styles.div}>
          <h2>Thank You For Shopping!!</h2>
        </div>
        <div id={styles.path}>
          <a href="/">Continue Shopping</a>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
