import React, { useEffect, useState } from 'react'
import styles from "./MakeUp.module.css"
import {v4 as uuid} from 'uuid'
export const ShowData = (item) => {
  const [CartData, setCardData] = useState([])
  const [review, setReview] = useState(0)
  const {image,rating,price,name,id}=item
  const AddToCart = () => {
console.log("hai");
    const cart ={image,rating,price,name,
      id:uuid()
    }
    console.log(cart);
     setCardData([cart,...CartData])
    
}  
const show = () => {
  console.log("hai");
      const cart ={image,rating,price,name,
        id:uuid()
      }
      console.log(cart);
       setCardData([cart,...CartData])
      
  }
  
 useEffect(()=>{
  let rand= Math.floor(Math.random() * 1000);
  setReview(rand)
 },[]) 
   
 

  return (
    <>
    
 
         
              <div  id= {styles.unit}>
                     
                     <img id= {styles.img} src= {image}/>
                     <p id= {styles.name}>{name}</p>
                     <p id= {styles.price}>RS .{price}</p>

                     <div id= {styles.ratingHold}>
                          <img id= {styles.star} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW-ijbF7ZlfvwARw20McEOaUkKA_HdCK7vA&usqp=CAU" alt="" />
                         <p id= {styles.rating}>{rating} ({review}) </p>
                     </div>

                     <div id= {styles.btnHold}>
                     <button id= {styles.btn} onClick={AddToCart}>ADD TO CART</button>
                     </div>
                  
             
         
    </div>
    </>

  )
}