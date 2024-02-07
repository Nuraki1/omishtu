import { useEffect, useState } from "react"
import React from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setCount(count+1)
        }, 1000);
        return ()=> {
            clearInterval(intervalId)
        }
    })
   
    //  const clicked = ()=> setCount(count + 1);

  return (
    <div>
        <button className="btn btn-primary" type='button' onClick={()=>setCount(count+1)}>clicked{count} times</button>
    </div>
   
  )
}

export default Timer
