import React, { useState } from 'react'
import './App.css'
const App = () => {
const [count , setCount]= useState(0);
// const add=()=>{
//   setCount(count+1);
//     console.log(count)
// }

  return (
    <>
    <div className='main'>
      <div className='body'>
            <p className='p'>{count}</p>
            <button className='button' onClick={()=>{setCount(count+1)}}> Add </button>

            <button className='button' onClick={()=>{setCount(count-1)}}> Sub</button>
      </div>
    </div>
     
    </>
  )
}

export default App