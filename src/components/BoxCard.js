import React,{useState} from 'react'

const BoxCard = ({title , description , result}) => {
    const [show , setShow]=useState(true)
  return (
    <>
    { show &&<div className={`box ${result}`}>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>

    </div>}
    <button className='trigger' onClick={()=>setShow(!show)}>Hide/Show</button>
    </>
  )
}

export default BoxCard