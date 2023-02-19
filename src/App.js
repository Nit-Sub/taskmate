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
  const [show , setShow]=useState(true);

  function handleDelete(id){
    setTasks(tasks.filter(task=> task.id!==id))
  
    
  }
  function hide (){
    setShow(false);
    console.log(show)
  }
  function shows(){
    setShow(true);
    console.log(show)
  }
  return (

    <>
    <div className='App'>
      <h1>Task List</h1>
      <ul>
        {show && tasks.map((task)=>(
          <li key={task.id}>
            <span>{task.id}- {task.name}</span>
            <button onClick={()=>handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={()=> shows()} >Show</button>
      
      <button onClick={()=> hide()} >hide</button>

    </div>
    </>
  );
}

export default App;
