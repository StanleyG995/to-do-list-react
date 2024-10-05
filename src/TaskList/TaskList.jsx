import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import Task from '../Task/Task.jsx'
import './TaskList.css'
import { ToDoListContext } from "../App.jsx"


function TaskList(props) {

    const {currentTasks, setCurrentTasks} = useContext(ToDoListContext)

    const addTask = () => {
        
    }

    return (
        <div className='task-list-container'>
            <h2 className='task-list-title'>Current tasks:</h2>
            <div className="task-list-outer">
                <div className='task-list-inner'>
                <ul className='task-list'>
                    {currentTasks.map((task, index) => <Task key={index} taskDesc={task}/>)}
                </ul> 
                </div>
            </div>
            
        </div>
    )
    
}

TaskList.propTypes = {
    taskListName: PropTypes.string,
}

export default TaskList