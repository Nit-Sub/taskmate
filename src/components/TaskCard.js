const TaskCard =({task , handleDelete})=>{
    console.log(task)
    return(
        <>
        <li >
              <span>{task.id}- {task.name}</span>
              <button onClick={()=>(handleDelete(task.id))}>Delete</button>
            </li>
        </>
    )
}
export default TaskCard;