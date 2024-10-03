import React, {useState} from 'react'
import Task from './Task.jsx'

function TaskList() {

    const [tasks, setTasks] = useState(['Test1', 'Test2', 'Test3'])

    const addTask = () => {
        
    }

    console.log(tasks)

    return (
       <ul>
            {tasks.map((task, index) => <Task key={index} taskDesc={task}/>)}
       </ul> 
    )
    
}

export default TaskList