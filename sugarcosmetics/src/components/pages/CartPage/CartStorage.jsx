import React, { useEffect, useState } from 'react'
import styles from "./CartStorage.module.css"
export const CartStorage = (item) => {
const {id,image,price,rating,name}=item
const deletediv=()=>
{
  console.log("delete");
}
  return (
  <><div className={styles.MainDiv}>
    <div><img className={styles.imas} src={image} />
   </div><div className={styles.cartname}> <p>{name}</p></div>
<img onClick={deletediv} className={styles.deleteIcan} src="https://img.icons8.com/fluency-systems-regular/344/filled-trash.png" />
   <div className={styles.price}> <button>+Additem(Rs. {price}.00)</button></div></div> </>
  )
}
