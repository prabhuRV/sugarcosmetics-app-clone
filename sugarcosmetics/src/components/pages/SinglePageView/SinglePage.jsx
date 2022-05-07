import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const SinglePage = () => {
       const [data, setData] = useState({});
      let { id } = useParams();
    const [items, setItems] = useState("");

    useEffect(() => {
      const items = localStorage.getItem("cat");
     
        setItems(items);
      
    });

    console.log(items);
       useEffect(() => {
         const hadllecall = async () => {
           try {
             let res = await fetch(`http://localhost:8080/${items}/${id}`);
             let data = await res.json();
             console.log(data);
             setData(data);
           } catch (e) {
             console.log(e);
           }
         };
         hadllecall();
       }, [items]);
         
  return (
    <>
      {!!data && (
        <>
          <div>
            <img 
              
              src={data.image}
              alt={data.name}
            />
            <div>
              <h2 >{data.name}</h2>
              <h3 >{data.price}</h3>
              
            </div>
          </div>
        
        </>
      )}
    </>
  );
}
