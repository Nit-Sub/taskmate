import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [tasks , setTasks]= useState([
    {
      id: 1 , name:"Nitesh", completed:true
    },{
      id: 2 , name:"Nit", completed:false
    },{
      id: 3 , name:"Sub", completed:true
    }
  ])
  return (
    <>
    <div className='App'>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task)=>(
          <li key={task.id}>
            <span>{task.id}- {task.name}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>

    </div>
    </>
  );
}

export default App;
