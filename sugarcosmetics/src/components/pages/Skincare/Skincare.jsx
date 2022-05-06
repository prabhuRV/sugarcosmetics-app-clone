import React, { useEffect, useState } from 'react'
import { ShowData } from "../Carddiscreption/ShowData";
import {v4 as uuid} from 'uuid';
import styles from "../Styles/Default.module.css";

export const Skincare = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
let getData=async ()=>{
    try{
let res=await fetch(" http://localhost:8080/SKINCARE")
let info=await res.json();

setData([...info]);
    }
    catch(error){
console.log(error)
    }
};
getData();
    },[])
  return (
    <div>
{data.map((item)=>{
   return  <ShowData key= {uuid()} {...item}/>
})}
    </div>
  )
}
