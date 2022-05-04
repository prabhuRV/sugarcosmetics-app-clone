import React from 'react'
import styles from "./MakeUp.module.css"
export const ShowData = (item) => {
  return (
    <>
    
 
         
              <div key= {item.id} id= {styles.unit}>
                     
                     <img id= {styles.img} src= {item.image}/>
                     <p id= {styles.name}>{item.name}</p>
                     <p id= {styles.price}>RS .{item.price}</p>

                     <div id= {styles.ratingHold}>
                          <img id= {styles.star} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW-ijbF7ZlfvwARw20McEOaUkKA_HdCK7vA&usqp=CAU" alt="" />
                         <p id= {styles.rating}>{item.rating}(55)</p>
                     </div>

                     <div id= {styles.btnHold}>
                     <button id= {styles.btn}>ADD TO CART</button>
                     </div>
                  
             
         
    </div>
    </>

  )
}