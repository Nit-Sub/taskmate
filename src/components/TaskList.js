import React,{useState} from 'react'
import TaskCard from './TaskCard';
import BoxCard from './BoxCard';

const TaskList = () => {
    
    const [tasks, setTasks] = useState([
        {
          id: 1, name: "Nitesh", completed: true
        }, {
          id: 2, name: "Nit", completed: false
        }, {
          id: 3, name: "Sub", completed: true
        }
      ])
    const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id))


  }
  function hide() {
    setShow(false);
    console.log(show)
  }
  function shows() {
    setShow(true);
    console.log(show)
  }
  return (
    <>
    <h1>Task List</h1>
        <ul>
          {show && tasks.map((task) => (
            <TaskCard task={task} handleDelete={handleDelete} key={task.id}/>
            
          ))}
        </ul>
        <button onClick={() => shows()} >Show</button>
        <button onClick={() => hide()} >hide</button>

        <BoxCard title="Lorem" result="alert" description="LoremLoremLoremLoremLorem"/>
        <BoxCard title="Lorem" result="success" description="LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"/>
        <BoxCard title="Lorem" result="warning" description="LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"/>


    </>
  )
}

export default TaskList