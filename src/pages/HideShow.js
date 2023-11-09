import React, { useState } from 'react'

const Input = () => {

  const [status,setStatus]=useState(false)
  return (
    <>
    {
      status? <h1>Hello World</h1>
      :null
    }
     
     <button onClick={()=>setStatus(false)}>Hide</button>
     <button onClick={()=>setStatus(true)}>Show</button>
    </>
  )
}

export default Input
