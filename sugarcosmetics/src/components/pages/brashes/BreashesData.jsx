import React,{useEffect,useState} from 'react'
import styles from './main.css'
import BrushesItem from './BrushesItems';
import {v4 as uuid} from 'uuid'
const BreashesData = () => {
        const [getData,setGetData] = useState([]);


     const breashesData = async()=>{  
        try {
              let res = await fetch("http://localhost:8080/BRUSHES");
              var data = await res.json();
              setGetData(data)
              
        } catch (error) {
               console.log(error)
        }
                    
    }
        useEffect(()=>{
            breashesData();
            // console.log("BreashesData",getData)
        },[setGetData])
  return (
    <>
       <div  className="container" style={styles.container}>
           
          { getData.map((elem)=>{
                       return <BrushesItem key={uuid()} {...elem} />
                      })}
            
        </div>
    </>
  )
}

export default BreashesData

//    let mainData = {
//                   ...data,
//                   id:uuid()
//               }
//                    let newUpdatedData  = mainData.map((elem)=>elem)