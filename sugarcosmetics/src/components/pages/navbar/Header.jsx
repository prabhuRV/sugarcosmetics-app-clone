import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  const [data, setData] = useState([]);

<<<<<<< Updated upstream
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    let getData = async (search) => {
      try {
        let res = await fetch(`http://localhost:8080/makeup?name=${search}`);
        let info = await res.json();
        console.log(info);
=======

  useEffect(()=>{
    let getData = async()=>{
       try {
         let res = await fetch("http://localhost:9000/search");
         let info = await res.json();
         console.log(info);
>>>>>>> Stashed changes
         setData([...info]);
      } catch (error) {
        console.log(error);
      }
    };
    getData(search);
  }, [search]);

  const handleChange = (e) => {
    var value = e.target.value;
    setSearch(value);
  };

<<<<<<< Updated upstream
=======
  const handleClick = ()=>{
    var value= document.querySelector("#inp").value;
    console.log(value)
      let new_data = data.filter((item)=>{
        return item.name.includes("matt")
      })
    console.log(new_data)
  }
    
>>>>>>> Stashed changes
  return (
    <>
      <div className={styles.div1}>
        FREE eyeshadow palette worth 1199 on a spend of 1199
      </div>
      <div className={styles.div2}>
        <div style={{ marginLeft: "60px" }}>
          <Link to="/">
            <img
              src="https://in.sugarcosmetics.com/desc-images/SUGARLogo1.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <div className={styles.input}>
            <input
              name="search"
              id="inp"
              onChange={handleChange}
              className={styles.input1}
              type="text"
              placeholder='Try "Liquid Lipstick"'
            />
            <button className={styles.button1}>Search</button>
            <div className={styles.dropdown2}>
              <p style={{ fontSize: "small", color: "orange" }}>Frequently</p>
              <div style={{ display: "flex", gap: "15px" }}>
                <div style={{ fontSize: "14px" }}>24hr-foundations</div>
                <div style={{ fontSize: "14px" }}>wallets</div>
                <div style={{ fontSize: "14px" }}>lipsticks</div>
              </div>
              <p style={{ fontSize: "small", color: "orange" }}>Hot picks</p>
              <div style={{ display: "flex", gap: "25px" }}>
                <div style={{ display: "flex", gap: "25px" }}>
                  {data.map((item) => (
                    <div key={item.id}>
                      <img
                        style={{ height: "58px", width: "50px" }}
                        src={item.image}
                        alt=""
                      />
                      <p style={{ fontSize: "12px" }}>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imgdiv1}>
          <div>
            <img
              src="https://in.sugarcosmetics.com/desc-images/person.png"
              alt=""
            />
          </div>
          Login/Register
        </div>
        <div style={{ display: "flex", paddingTop: "15px", gap: "20px" }}>
          <span>
            <i className="fa-solid fa-heart"></i>
          </span>
          <span>
            <Link to="/cart">
              <i className="fa-solid fa-cart-arrow-down"></i>
            </Link>
          </span>
          <div>
            <img
              className={styles.icon3}
              src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.div3}>
        <div className={styles.makeup}>
          <Link to="/makeup">MAKEUP</Link>
          <div className={styles.dropdown1}>
            <Link to="/lips">LIPS</Link>
            <Link to="/face">FACE</Link>
            <Link to="/eyes">EYES</Link>
          </div>
        </div>

        <div className={styles.makeup}>
          <Link to="/brushes">BRUSHES</Link>
          <div className={styles.dropdown1}>
            <Link to="/facebrushes">FACE BRUSHES</Link>
            <Link to="/eyebrushes">EYE BRUSHES</Link>
          </div>
        </div>
        <div className={styles.makeup}>
          <Link to="/skincare">SKINCARE</Link>
          <div className={styles.dropdown1}>
            <Link to="/moisturisers">MOISTURISERS</Link>
            <Link to="/masks">MASKS</Link>
            <Link to="/settingmists">SETTING MISTS</Link>
            <Link to="/coffeculturerange">COFFEE CULTURE RANGE</Link>
            <Link to="/sheetmustcombo">SHEET MUSK COMBO</Link>
            <Link to="/citrusgoatrealrange">CITRUS GOAT REAL RANGE</Link>
            <Link to="/aquaholicrange">AQUAHOLIC RANGE</Link>
          </div>
        </div>
        <div className={styles.makeup}>
          <Link to="/trending">TRENDING</Link>
          <div className={styles.dropdown1}>
            <Link to="/sugarmerchstation">SUGAR MERCH STATION</Link>
            <Link to="/makeupkits">MAKE UP KITS</Link>
            <Link to="/bestsellers">BESTSELLERS</Link>
          </div>
        </div>

        <div>
          <Link to="/blog">BLOG</Link>
        </div>
        <div>
          <Link to="/offers">OFFERS</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
