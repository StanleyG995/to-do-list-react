import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Task from './Task.jsx'
import './TaskList.css'


function TaskList(props) {

    const [tasks, setTasks] = useState(['Test1', 'Test2', 'Test3'])

    const addTask = () => {
        
    }

    console.log(tasks)

    return (
        <div className='task-list-container'>
            <ul className='task-list'>
            {tasks.map((task, index) => <Task key={index} taskDesc={task}/>)}
            </ul> 
        </div>
       
    )
    
}

TaskList.propTypes = {
    taskListName: PropTypes.string,
}

export default TaskList