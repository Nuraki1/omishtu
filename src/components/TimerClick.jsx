import React, { useEffect, useState } from 'react'



const TimerClick = () => {
    
    const [count, setCount] = useState(0);
    // console.log(count)

    // useEffect(
    //     ()=>{
    //       setInterval(() => {
    //             setCount(count+1)
    //             // console.log(count);
    //         }, 1000);
            
    //     }
       
        
    // )




    // useEffect(()=>{} )                //mounting
    // useEffect(return ()=>{} )          //unmounting
    
    // useEffect(()=>{}, [] )            //mounting on the first render
    // useEffect(()=>{}, [counter] )     //updating on state variable change




  return (
    <div>
        <button onClick={()=>setCount(count + 1)}>click </button>


      
    </div>
  )
}

export default TimerClick
