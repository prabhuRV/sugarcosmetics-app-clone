import React, { useEffect, useState } from 'react'
import styles from "./MakeUp.module.css"

function MakeUp() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        let getData= async()=>{
            try {
                let res= await fetch("http://localhost:8080/makeup");
                let info= await res.json();
                console.log(info)
                setData([...info])
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    },[])

    const handleH2l = ()=>{
        let new_data= data.sort((a,b)=>{ return b.price - a.price });
        console.log(new_data)
        setData([...new_data])
    }

    const handleL2h = ()=>{
        let sorted_data= data.sort((a,b)=>{ return  a.price - b.price });

        console.log(sorted_data)
        setData([...sorted_data])
    }

  return (
      <>
    <div id= {styles.infoContain}>
        <div id= {styles.info}>
          <h1 id= {styles.h1}>Makeup :</h1>
          <p id= {styles.items}>54 items</p>
         </div>
     
       <div id={styles.sortData}>

              <div id={styles.opt}>
                     <div id= {styles.top} >
                          <p>Select Sorting</p>
                          <p>Clear All</p>
                     </div><hr/>
                        
                        <div id={styles.line}>
                          <p>Relevance</p>
                        </div><hr/>
                          
                          <div id={styles.line} onClick= {handleH2l}>
                             <p>Price - High to Low</p>
                          </div> <hr/>
                            
                          <div id={styles.line} onClick= {handleL2h}>
                          <p>Price - Low to High</p>
                          </div> 
                           
                           
                </div>
       </div>

        
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

                
                     
                     <div style= {{height: "40px"}}>
                        <div id= {styles.btnHold}>
                        <button id= {styles.btn}>ADD TO CART</button>
                        </div>
                     </div>
              </div>
          ))}
    </div>
    </>
  )
}

export default MakeUp