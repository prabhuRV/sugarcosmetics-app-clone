import React from 'react'
import styles from "./Payment.module.css";

function Payment() {
    const handleClick = () =>{
       document.querySelector("#inpHold").style.display = "block";
    }
  return (
    <div id= {styles.main}>
           <div id= {styles.parent}>
                  <div>

                  </div>
                  <div>
                      <p id= {styles.p}>Payment Method</p>

                           <div id= {styles.div}>
                               <p id= {styles.p2}>Select Payment Method</p>
                               <div onClick={handleClick} id= {styles.instant}> 
                                      <div> <p id= {styles.p}>Instant Pay Using Other UPIs(Gpay,PhonePe,BHIM etc)</p></div>
                                      <div id= {styles.inpHold}>
                                          <input type="text" name="" id={styles.upi} placeholder="ENTER UPI ID"/>
                                      </div>
                               </div>
                           </div>
                  </div>
           </div>

    </div>
  )
}

export default Payment