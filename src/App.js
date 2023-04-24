import React, { useState } from 'react'
import './App.css'
const App = () => {
const [tasks , setTasks] = useState([
  {id:1010, name:'Nitesh' , completed: true },
  {id:1011, name:'Nites' , completed: false },
  {id:1012, name:'Niteh' , completed: true }
])
  return (
    <>
    <div className='main'>
      <div className='body'>
        <h1>Task List</h1>
        <ul>
          {
            tasks.map((task)=>(
              <li key={task.id}>
                <span>{task.id}- {task.name}</span>
                <button>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
     
    </>
  )
}

export default App