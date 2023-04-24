import React, { useState } from 'react'
import './App.css'
const App = () => {
const [tasks , setTasks] = useState([
  {id:1010, name:'Nitesh' , completed: true },
  {id:1011, name:'Nites' , completed: false },
  {id:1012, name:'Niteh' , completed: true }
])
const[show , setShow]=useState(false)
const handleDelete=(id)=>{
  setTasks(tasks.filter(task=>id !==task.id))

}
const setting=()=>{
  setShow(true)
}
const hide=()=>{
  setShow(false)
}
  return (
    <>
    <div className='main'>
      <div className='body'>
        <h1>Task List</h1>
        <button onClick={setting}>Show</button>
        <button onClick={hide}>hide</button>
        {show &&
        <ul>
        {
          tasks.map((task)=>(
            <li key={task.id}>
              <span>{task.id}- {task.name}</span>
              <button onClick={()=>handleDelete(task.id)}>Delete</button>
            </li>
          ))
        }
      </ul>}
      </div>
    </div>
     
    </>
  )
}

export default App