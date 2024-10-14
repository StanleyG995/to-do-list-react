import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { ToDoListContext } from "../App.jsx"


function Task(props) {

    const {removeTask} = useContext(ToDoListContext)

    return (
        <li id={`task-${props.taskId}`} className='task'  >
                <div className="task-container task-info">
                    <p className='task-category'>{props.taskCategory}</p>
                    <div className='task-dates'>
                        <p className="task-date">Added: {props.taskDate}</p>
                        <p className="task-due">Due: {props.taskDue}</p>
                    </div>
                    
                    <p className='task-description-title'>Task description:</p>
                    <p className="task-description-text">{props.taskDescription}</p>
                    
                </div> 

                <div className="task-container task-controls">
                    <button className="button button--primary">✔ Done</button>
                    <div className="task-controls--secondary">
                        <button className="button">✎ Edit</button>
                        <button className="button button--danger task-button-remove" onClick={(e) => removeTask(e)}><span style={{fontWeight: 'bold', pointerEvents:'none'}}>✕</span> Delete</button>
                    </div>
                </div>         
            
        </li>

        
    )

}

Task.propTypes = {
    taskDescription: PropTypes.string,
    taskId: PropTypes.number,
    taskDate: PropTypes.string,
    taskDue: PropTypes.string,
    taskCategory: PropTypes.string
}

export default Task