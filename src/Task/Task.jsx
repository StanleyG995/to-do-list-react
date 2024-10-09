import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { ToDoListContext } from "../App.jsx"


function Task(props) {

    const {removeTask} = useContext(ToDoListContext)

    return (
        <li id={`task-${props.taskId}`} className='task'  >
            <div className="task-container task-container-info">
                <div className="task-info">
                    <p className='task-category'>{props.taskCategory}</p>
                    <p className="task-date">Added:{props.taskDate}</p>
                    <p className="task-till">Do till:{props.taskTill}</p>
                </div>

                <div className="task-controls">
                    <button className="button button--primary">✔ Done</button>
                    <button className="button">✎ Edit</button>
                    <button className="button button--danger" onClick={(e) => removeTask(e)}><span style={{fontWeight: 'bold', pointerEvents:'none'}}>✕</span> Delete</button>
                </div>
            </div>

            <div className="task-container task-container-descriptionn">
                <p className='task-description-title'>Task description:</p>
                <p className="task-description">{props.taskDescription}</p>
            </div>

            
            
        </li>

        
    )

}

Task.propTypes = {
    taskDescription: PropTypes.string,
    taskId: PropTypes.number,
    taskDate: PropTypes.string,
    taskCategory: PropTypes.string
}

export default Task