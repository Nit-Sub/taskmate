import React from 'react'
import './AddTask.css';

const AddTask = () => {
    const handleChange =(event)=>{
        console.log(event.target.value)
       
    }
    return (
        <>
            <section className="addtask">
                <form>
                    <label htmlFor="task">Task Name:</label>
                    <input onChange={handleChange} type="text" name="task" id="task" placeholder='Task Name' autoComplete='off' />
                    <button type="submit" >AddTask</button>
                </form>
            </section>
        </>
    )
}

export default AddTask;