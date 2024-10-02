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
            <Task taskDesc="Task 4" />
            <Task taskDesc="Task 5" />
            <Task taskDesc="Task 6" />
            <Task taskDesc="Task 7" />
            <Task taskDesc="Task 8" />
            <Task taskDesc="Task 9" />
            <Task taskDesc="Task 10" />
       </ul> 
    )
    
}

export default TaskList