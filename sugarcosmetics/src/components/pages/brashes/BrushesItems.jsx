// reusable card component
import React, { useState } from 'react';
import styles from './main.css'
import {v4 as uuid} from 'uuid'
// import {useContext} from 'react'
// import { SearchContext } from '../contexts/SearchData'; 
// import { Link } from 'react-router-dom';
const  BrushesItem = ({image,rating,price,name}) => {
  
    const linkColor = {
    color:"lightgray",
    textDecoration:"none",
    fontFamily: "sans-serif",
    fontWeight:"500",
    fontSize:"14px"
}

     const [CartData, setCardData] = useState([])
    // const {divData,setDivdata} = useContext(SearchContext); 
    // const[DivData,setDivData]=useState({})/
  
    
    const handleDivClick = ()=>{
        const DivDetails ={image,rating,price,name,
          id:uuid()
        }
      //  setDivdata(DivDetails)
        console.log(DivDetails)
     
    }  
    
       const AddToCart = () => {
        const cart ={image,rating,price,name,
          id:uuid()
        }
         setCardData([cart,...CartData])
        
    }  
      
   
  return <>
           <div  style={{display:"block",cursor:"pointer"}}>
               {/* <Link style={linkColor}to="/productDetails">*/}  <div onClick={handleDivClick} style={{cursor:"pointer",display:"flex"}}> 
                 
                  <div style={{marginLeft:"15px"}}>
                     <img style={{cursor:"pointer",width:"100%",height:"100%"}} src={image} alt={1} />
                  </div>
               </div>
              {/*  </Link>*/}
               <br />
               <div style={{display:"block"}}>
                 <p style={{color:"gray",fontWeight:"bold"}}>{name}</p>
                 <p> Rs: {price} </p>
               </div>
                 <div style={{display:"flex",margin:"auto",justifyContent:"center"}}>
                  <div>
                     <img style={{width:"25px",heigth:"25px",marginTop:"-5px"}} src="	https://in.sugarcosmetics.com/star_filled.png" alt="rating" />
                  </div>
                   <div>
                     <span style={{marginLeft:"5px"}} > {rating}</span>
                   </div>
                 </div>
 
              <div className='hideDiv'>
                 <button className='b1' >WishList</button>
                 <button onClick={AddToCart} className='b2'>Add To Cart</button>
               </div>
             </div>
           
        </>;
};
export default BrushesItem;
