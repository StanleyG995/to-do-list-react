import React, {useState} from 'react'
import Task from './Task.jsx'

function TaskList() {

    const [tasks, setTasks] = useState([])
    console.log(tasks)
    return (
       <ul>
            <Task taskDesc="Task 1" />
            <Task taskDesc="Task 2" />
            <Task taskDesc="Task 3" />
       </ul> 
    )
    
}

export default TaskList