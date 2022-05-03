import React, { useEffect, useState } from 'react';
import styles from "./Lips.module.css"

function Lips() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        let getData = async()=>{
            try {
                let res = await fetch("http://localhost:8080/Lips");
                let info = await res.json();
                console.log(info)
                setData([...info])
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    },[])
  return (
    <>
    <div id= {styles.info}>
        <h1 id= {styles.h1}>Makeup :</h1>
        <p id= {styles.items}>41 items</p>
    </div>
  <div id={styles.contain}>
        {data.map((item)=>(
            <div key= {item.id} id= {styles.unit}>
                   
                   <img id= {styles.img} src= {item.image}/>
                   <p id= {styles.name}>{item.name}</p>
                   <p id= {styles.price}>{item.price}</p>

                   <div id= {styles.ratingHold}>
                        <img id= {styles.star} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW-ijbF7ZlfvwARw20McEOaUkKA_HdCK7vA&usqp=CAU" alt="" />
                       <p id= {styles.rating}>{item.rating}(55)</p>
                   </div>

                   <div id= {styles.btnHold}>
                   <button id= {styles.btn}>ADD TO CART</button>
                   </div>
                
            </div>
        ))}
  </div>
  </>
  )
}

export default Lips