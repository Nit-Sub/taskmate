import React from 'react'

const AddTask = () => {
  return (
    <>
    <section>
        <form>
            <label htmlFor='task '>
                Task Name:
            </label>
            <input type="text" name="task" id="task" placeholder='Task Name'/>
            <button type='submit'>Add task</button>
        </form>
    </section>
    </>
  )
}

export default AddTask