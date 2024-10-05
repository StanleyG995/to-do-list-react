import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Task from './Task.jsx'
import './TaskList.css'


function TaskList(props) {

    const [tasks, setTasks] = useState(['Test1', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6', 'Test7', 'Test8', 'Test9', 'Test10'])

    const addTask = () => {
        
    }

    console.log(tasks)

    return (
        <div className='task-list-container'>
            <h2 className='task-list-title'>Current tasks:</h2>
            <div className='task-list-inner'>
                <ul className='task-list'>
                {tasks.map((task, index) => <Task key={index} taskDesc={task}/>)}
                </ul> 
            </div>
        </div>
       
    )
    
}

TaskList.propTypes = {
    taskListName: PropTypes.string,
}

export default TaskList