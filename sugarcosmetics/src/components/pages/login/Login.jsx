import React from 'react';
import styles from "./Login.module.css"

function Login() {
  return (
      <>
    <div id= {styles.slide}>
         <img id= {styles.bg} src="https://in.sugarcosmetics.com/Login_bg.svg" alt="" />
    </div>
     
       <div id = {styles.form}>
            <p id = {styles.head}>Login/Sign Up Using Phone</p>
            <input type="text" id= {styles.number}  maxlength="10"/>
      </div>
    </>
  )
}

export default Login
