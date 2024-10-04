import React, {useState} from 'react'
import Task from './Task.jsx'
import Input from './Input.jsx'

function TaskList() {

    const [tasks, setTasks] = useState(['Test1', 'Test2', 'Test3'])

    const addTask = () => {
        
    }

    console.log(tasks)

    return (
        <div className='to-do-list'>
            <Input />
            <ul>
            {tasks.map((task, index) => <Task key={index} taskDesc={task}/>)}
            </ul> 
        </div>
       
    )
    
}

export default TaskList