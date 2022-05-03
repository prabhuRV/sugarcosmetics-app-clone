import React from 'react'

const Breashes = () => {
        const [getData,setGetData]=React.useState([]);


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
            console.log("BreashesData",getData)
        },[setGetData])
  return (
    <div>breashesData</div>
  )
}

export default Breashes