import React from 'react'
import styles from './Header.module.css'
function Header() {
  return (
    <>
    <div className={styles.div1}>
    FREE eyeshadow palette worth 1199 on a spend of 1199
    </div>
    <div className={styles.div2}>
      <div style={{marginLeft : "60px" , }}><img src="https://in.sugarcosmetics.com/desc-images/SUGARLogo1.png" alt="" /></div>
      <div>
        <div className = {styles.input}><input className={styles.input1} type="text" placeholder='Try "Liquid Lipstick"'/><button className={styles.button1}>Search</button>
        <div className={styles.dropdown2}>
          <p style ={{fontSize : "small" , color : "orange"}}>Frequently</p>
          <div style = {{display:"flex" , gap : "15px"}}>
            <div style ={{fontSize : "14px"}}>24hr-foundations</div>
            <div style ={{fontSize : "14px"}}>wallets</div>
            <div style ={{fontSize : "14px"}}>lipsticks</div>
          </div>
          <p style ={{fontSize : "small" , color : "orange"}}>Hot picks</p>
          <div style = {{display : "flex" , gap:"25px"}}>
            <div>
              <img style = {{height : "58px" , width : "50px"}} src="https://media.sugarcosmetics.com/upload/These-super-easy-hacks-will-fix-your-dried-mascara-cover.jpg" alt="" />
              <p style ={{fontSize : "12px"}}>Mascara</p>
            </div>
            <div>
              <img style = {{height : "58px" , width : "50px"}} src="https://media.sugarcosmetics.com/upload/Brow.jpg" alt="" />
              <p style ={{fontSize : "12px"}}>Brow</p>
            </div>
            <div>
              <img style = {{height : "58px" , width : "50px"}} src="https://media.sugarcosmetics.com/upload/EBO-128x165-sheet-mask...jpg" alt="" />
              <p style ={{fontSize : "12px"}}>Face Mask</p>
            </div>
            <div>
              <img style = {{height : "58px" , width : "50px"}} src="https://media.sugarcosmetics.com/upload/Gifting.jpg" alt="" />
              <p style ={{fontSize : "12px"}}>Gifting</p>
            </div>
            <div>
              <img style = {{height : "58px" , width : "50px"}} src="https://media.sugarcosmetics.com/upload/CDF.jpg" alt="" />
              <p style ={{fontSize : "12px"}}>Bronzer</p>
            </div>
          </div>
        </div>
        </div>
        </div>
      <div className={styles.imgdiv1}>
        <div><img src="https://in.sugarcosmetics.com/desc-images/person.png" alt="" /></div>
        Login/Register</div>
      <div style = {{display:"flex" , paddingTop : "15px" , gap : "20px"}}>
        <span><i class="fa-solid fa-heart"></i></span>
        <span><i class="fa-solid fa-cart-arrow-down"></i></span>
        <div><img className={styles.icon3} src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg" alt="" /></div>
      </div>
    </div>
    <div className={styles.div3}>
        <div className={styles.makeup}>MAKEUP
          <div className={styles.dropdown1}>
            <a href="#">LIPS</a>
            <a href="#">FACE</a>
            <a href="#">EYES</a>
          </div>
        </div>
        
        <div className={styles.makeup}>BRUSHES
          <div className={styles.dropdown1}>
              <a href="#">FACE BRUSHES</a>
              <a href="#">EYE BRUSHES</a>
          </div>
        </div>
        <div className={styles.makeup}>SKINCARE
        <div className={styles.dropdown1}>
              <a href="#">MOISTURISERS</a>
              <a href="#">MASKS</a>
              <a href="#">SETTING MISTS</a>
              <a href="#">COFFEE CULTURE RANGE</a>
              <a href="#">SHEET MUSK COMBO</a>
              <a href="#">CITRUS GOAT REAL RANGE</a>
              <a href="#">AQUAHOLIC RANGE</a>
              
          </div>
        </div>
        <div className={styles.makeup}>TRENDING
        <div className={styles.dropdown1}>
              <a href="#">SUGAR MERCH STATION</a>
              <a href="#">MAKE UP KITS</a>
              <a href="#">BESTSELLERS</a>
              
          </div>
        </div>
        
        <div>BLOG</div>
        <div>OFFERS</div>
    </div>
    </>
    
  )
}

export default Header