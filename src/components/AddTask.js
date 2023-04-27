import React, { useState } from 'react'
import './AddTask.css';

const AddTask = () => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState("");
    const handleChange = (event) => {
        setTaskValue(event.target.value)

    }
    const handleReset = () => {
        setTaskValue("");
        setProgress(false)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        }
        console.log(task)
        handleReset();
    }
    return (
        <>
            <section className="addtask">
                <form onSubmit={handleSubmit} >
                    <label htmlFor="task">Task Name:</label>
                    <input onChange={handleChange} type="text" name="task" id="task" placeholder='Task Name' autoComplete='off' value={taskValue} />
                    <select onChange={(e) => setProgress(e.target.value)} value={progress}>
                        <option value={false}>Pending</option>
                        <option value={true}>completed</option>
                    </select>
                    <button type="submit" >AddTask</button>
                    <span onClick={handleReset} className='reset'> Reset</span>
                </form>
                <p>{taskValue}</p>
            </section>
        </>
    )
}
export default AddTask;