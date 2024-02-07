import React from 'react'

const Scrollable = (props) => {
  return (


    <div style={{overflowY:"scroll",  border: "2px solid black", height: "600px"}}>
        {props.children}
    </div>
  )
}

export default Scrollable
