import React, { useEffect, useState } from 'react';
import { ShowData } from '../Carddiscreption/ShowData';
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
  {data.map((item, index) => {
      return (
        <ShowData
       
          key={item.id}
          {...item}
       
        />
      );
    })}
        
  </div>
  </>
  )
}

export default Lips