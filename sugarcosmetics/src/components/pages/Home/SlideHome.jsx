import React, { useEffect, useState } from "react";
import { ShowData } from "../Carddiscreption/ShowData";
// import styles from './Delivery.module.css'
import styles from "../Styles/Default.module.css";
function Delivery() {
  const [data, setData] = useState([]);
  const [count,setCount] = useState(0);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    let getData = async () => {
      try {
        let res = await fetch("http://localhost:8080/BRUSHES");
        let info = await res.json();
        console.log(info);
        setData([...info]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);


     
  const handleLeft = ()=>{

   
      if (count > 3 ) {
          let one = count - 1;
          setCount(one);
          console.log(count);

      let newdata = [];
      for (let i = count; i > count - 4; i--) {
        newdata.push(data[i]);
      }
      console.log(newdata);
      let newUpdatedData = newdata.map((elem) => elem);
      setNewData(newUpdatedData);
    }
  }

  const handleRight = () => {
    
    
     if (count < data.length - 2) {
        let one = count + 1;
        setCount(one);
       let newdata = [];
       for (let i = count; i < count + 4; i++) {
         newdata.push(data[i]);
       }
       console.log(newdata);
       let newUpdatedData = newdata.map((elem) => elem);
       setNewData(newUpdatedData);
     }

  };
   useEffect(()=>{
        let newdata = [];
        for (let i = 0; i <4; i++) {
          newdata.push(data[i]);
        }
        console.log(newdata);
        let newUpdatedData = newdata.map((elem) => elem);
        setNewData(newUpdatedData);
   },[])
     
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "95%",
          height: "400px",
          // border: "1px solid gray",
          margin: "auto",
          marginTop: "30px",
          marginBottom:"60px"
        }}
      >
        <div style={{  width: "10%" }}>
          <div
            id="left"
            onClick={handleLeft}
            style={{ marginTop: "180px", marginLeft: "100px" }}
          >
            <img src="https://in.sugarcosmetics.com/less-than.png" alt="left" />
          </div>
        </div>
        <div style={{  width: "80%" }}>
          <div id={styles.contain}>
            {newData.map((item, index) => {
              return <ShowData {...item} />;
            })}
          </div>
        </div>
        <div style={{  width: "10%" }}>
          <div id="right" onClick={handleRight} style={{ marginTop: "170px" }}>
            <img
              src="https://in.sugarcosmetics.com/greater-than.png "
              alt="right"
            />
          </div>
        </div>
      </div>

      {/* n */}
    </>
  );
}

export default Delivery;

{
  /* 
      <div style={{ position: "relative" }}>
        <div className={styles.container}>
          <img
            className={styles.img1}
            src="https://in.sugarcosmetics.com/guestCheckout/topleftcircles75.png"
            alt=""
          />
          <button className={styles.button1}>Log In/Sign Up</button>
          <p style={{ marginTop: "10px" }}>OR</p>
          <div className={styles.innerdiv1}>
            <img
              src="https://in.sugarcosmetics.com/guestCheckout/reception.svg"
              alt=""
            />
            <p>Continue as a guest</p>
          </div>
          <form>
            <div className={styles.formdiv1}>
              <div>
                <input type="text" name="name" placeholder="Full Name" />
                <input type="number" name="number" placeholder="phone number" />
              </div>
              <div>
                <input
                  type="number"
                  name="flatNumber"
                  placeholder="Flat Number"
                />
                <input type="text" name="email" placeholder="Email Id" />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Apartment Address"
                />
                <div>
                  <input
                    className={styles.special}
                    type="number"
                    name="pincode"
                    placeholder="Zipcode/ Pincode"
                  />
                  <button className={styles.details}>Get Details</button>
                </div>
              </div>
            </div>
            <div className={styles.formdiv2}>
              <div>
                <input type="text" name="state" placeholder="State/ Province" />
              </div>
              <div>
                <input type="text" name="city" placeholder="City" />
              </div>
              <div>
                <input type="text" name="country" placeholder="Country" />{" "}
              </div>
            </div>
            <div className={styles.formdiv3}>
              <div>
                <button className={styles.cancel}>Cancel</button>
              </div>
              <div>
                <button className={styles.save}>
                  Save and use this address
                </button>
              </div>
            </div>
          </form>
          <img
            className={styles.img2}
            src="https://in.sugarcosmetics.com/guestCheckout/bottomrightcircles75.png"
            alt=""
          />
        </div>
      </div> */
}
