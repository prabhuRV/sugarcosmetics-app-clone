import React, {useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Delivery.module.css";

function Delivery() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const inputName = e.target.name;
 
   
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      });
    
  };
    localStorage.setItem("Address", JSON.stringify(formData));
console.log(formData);
  const haddleSubmit = (e) => {
    e.preventDefault();
  console.log("hai");

  

  };
  return (
    <>
      <div style={{ marginTop: "50px" }}></div>

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

          <form onSubmit={haddleSubmit}>
            <div className={styles.formdiv1}>
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Full Name"
                />
                <input
                  type="number"
                  name="number"
                  onChange={handleChange}
                  placeholder="phone number"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="flatNumber"
                  placeholder="Flat Number"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email Id"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Apartment Address"
                  onChange={handleChange}
                />
                <div>
                  <input
                    className={styles.special}
                    type="number"
                    name="pincode"
                    placeholder="Zipcode/ Pincode"
                    onChange={handleChange}
                  />
                  <button className={styles.details}>Get Details</button>
                </div>
              </div>
            </div>
            <div className={styles.formdiv2}>
              <div>
                <input
                  type="text"
                  name="state"
                  onChange={handleChange}
                  placeholder="State/ Province"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  name="city"
                  placeholder="City"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  name="country"
                  placeholder="Country"
                />{" "}
              </div>
            </div>
            <div className={styles.formdiv3}>
              <div>
                <button className={styles.cancel}>Cancel</button>
              </div>
              <div onClick={() => navigate("/deliveryform")}>
                <input
                  type="submit"
                  className={styles.save}
                  value="Save and use this address"
                />
              </div>
            </div>
          </form>
          <img
            className={styles.img2}
            src="https://in.sugarcosmetics.com/guestCheckout/bottomrightcircles75.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Delivery;
