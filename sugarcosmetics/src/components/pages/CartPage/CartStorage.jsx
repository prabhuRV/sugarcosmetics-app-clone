import React, { useEffect, useState } from "react";
import styles from "./CartStorage.module.css";
 
 
export const CartStorage = (item) => {
 const getDatafromLS = () => {
   let car = localStorage.getItem("items");
   //console.log(data);
   if (car) {
     return +car;
   } else {
     return price;
   }
 };
  const Counter = () => {
    let a = localStorage.getItem("count");
    //console.log(data);
    if (a) {
      return +a;
    } else {
      return 1;
    }
  };
  const { id, image, price, rating, name } = item;
  const [show, setShow] = useState(getDatafromLS());
    const [count, setCount] = useState(Counter());
    
    const [total,setTotal]=useState([])
   
  const deletediv = () => {
    console.log("delete");
  };

  const handleInc = () => {
    setCount(count + 1);
    setShow(count * price);

  };
  const handleDec = () => {
    if (count > 1) {
      setCount(count - 1);
      
     setShow(show-count * price);
        
    }
  };
  console.log(show);
let Counttotal=count*price


useEffect(() => {

  localStorage.setItem("items", show);
}, [show]);
useEffect(() => {
  //  setTotal(show, ...total);

  localStorage.setItem("count", count);
}, [count]);

console.log(total);

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

        <div className={styles.GrandPricediv}>
          {count} *{price}.00={Counttotal}.00
        </div>
      </div>
    </>
  );
};
