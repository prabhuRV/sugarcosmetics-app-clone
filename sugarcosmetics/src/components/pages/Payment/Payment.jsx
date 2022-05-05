import React, { useState } from 'react'
import styles from "./Payment.module.css";

function Payment() {
    const [click, setClick] = useState(false)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)
    const handleClick = () =>{
       setClick(!click);
       setClick2(false);
       setClick3(false)
       document.querySelector("#instant").style.backgroundColor = "white";
    }
    const handleClick2 = () =>{
      setClick2(!click2);
      setClick(false)
      setClick3(false)
   }
   const handleClick3 = () =>{
    setClick(false)
    setClick2(false);
    setClick3(!click3);
 
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
                               <div id= {styles.instant}> 

                                        <div id= {styles.p3Hold}  onClick={handleClick} > 
                                        <p id= {styles.p3}>Instant Pay Using Other UPIs(Gpay,PhonePe,BHIM etc)</p>
                                        </div>
                                      {click ? <div id= {styles.inpHold}>
                                          <input type= "text" id= {styles.upi} placeholder = "ENTER UPI ID"/>
                                        </div>: <div></div>} 
                               </div>
                               
                                <div id= {styles.instant}>
                                     <div  onClick={handleClick2}>
                                       <p id= {styles.p3}>Mobile Wallets (PhonePe,Freecharge etc)</p>
                                     </div>
                                     {click2 ? <div id= {styles.options}>

                                         <div id= {styles.div1}>
                                           <img  id= {styles.img}src="https://i.ndtvimg.com/i/2016-06/mobikwik-625_625x300_71464790034.jpg" alt="" />
                                           <p>Mobikwik</p>
                                         </div>

                                         <div id= {styles.div1}>
                                           <img  id= {styles.img}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcml_kwNhYZrYOczgmFKu2CooS3989RMaMw&usqp=CAU" alt="" />
                                           <p>Payzapp</p>
                                         </div>

                                         <div id= {styles.div1}>
                                           <img  id= {styles.img}src="https://seeklogo.com/images/A/airtel-logo-2F959F4207-seeklogo.com.png" alt="" />
                                           <p>Airtelmoney</p>
                                         </div>

                                         <div id= {styles.div1}>
                                           <img  id= {styles.img}src="https://toppng.com/uploads/preview/amazon-mobile-app-logo-design-amazon-app-logo-11563014185a4rafc6tku.png" alt="" />
                                           <p>Amazonpay</p>
                                         </div>

                                         <div id= {styles.div1}>
                                           <img  id= {styles.img}src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/freecharge-logo.png" alt="" />
                                           <p>Freecharge</p>
                                         </div>

                                         <div id= {styles.div1}>
                                           <img  id= {styles.img}src="https://nuvei.com/wp-content/uploads/2021/06/jiomoney.png" alt="" />
                                           <p>Jiomoney</p>
                                         </div>

                                         <div id= {styles.div1}>
                                           <img  id= {styles.img}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14ejnUbNksvEOEyjq543jUNb_deVEAR-Se2gBtjIprvbaySblF1xiQTqaghY6cNQlF5g&usqp=CAU" alt="" />
                                           <p>Phonepe</p>
                                         </div>
                                        </div>: <div></div>} 
                                </div>
                             
                                <div id= {styles.instant}> 

                                    <div id= {styles.p3Hold}  onClick={handleClick3} > 
                                    <p id= {styles.p3}>Credit/Debit cards(Visa,Master,Rupay,Amex etc)</p>
                                    </div>
                                    {click3 ? <div id= {styles.inpHold}>
                                      <div>
                                      <input type= "text" id= {styles.card} placeholder = "ENTER UPI ID"/>
                                      </div>
                                     <div>
                                     <input type= "text" id= {styles.holder} placeholder = "ENTER UPI ID"/>
                                     </div>
                                      <div id= {styles.expHold}>
                                      <input type= "text" id= {styles.expiry} placeholder = "Expiry"/>
                                      <input type= "text" id= {styles.cvv} placeholder = "cvv"/>
                                      </div>
                                      <input type= "checkbox"/>
                                      <p id= {styles.p3}>We will securely save this card for faster paymnet experience (CVV will not saved). If required you can remove this card from My Account > Payment Methods</p>
                                    </div>: <div></div>} 
                                </div>


                           </div>
                  </div>
           </div>

    </div>
  )
}

export default Payment