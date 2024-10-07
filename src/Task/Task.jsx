import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { ToDoListContext } from "../App.jsx"


function Task(props) {

    const {currentTasks, setCurrentTasks, taskDesc, setTaskDesc, removeTask} = useContext(ToDoListContext)

    

    return (
        <li id={`task-${props.taskId}`} className='task'  >

            <div className='task-directional-controls'>
                <button className='task-arrow task-arrow--up'>▲</button>
                <button className='task-arrow task-arrow--down'>▼</button>
            </div>

            <p className="task-desc">{props.taskId}{props.taskDesc}</p>
            <span className="task-date">{new Date().toLocaleString()}</span>
            
            <button className="button button--primary">✔ Done</button>
            <button className="button">✎ Edit</button>
            <button className="button button--danger" onClick={(e) => removeTask(e)}><span style={{fontWeight: 'bold', pointerEvents:'none'}}>✕</span> Delete</button>
            
        </li>

        
    )

}

Task.propTypes = {
    taskDesc: PropTypes.string,
    taskId: PropTypes.number
}

export default Task