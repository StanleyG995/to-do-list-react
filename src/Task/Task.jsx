import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { ToDoListContext } from "../App.jsx"


function Task(props) {

    const {removeTask} = useContext(ToDoListContext)

    return (
        <li id={`task-${props.taskId}`} className='task'  >

            <p className='task-category'>{props.taskCategory}</p>
            <p className="task-desc">{props.taskDesc}</p>
            <span className="task-date">{props.taskDate}</span>
            
            <button className="button button--primary">✔ Done</button>
            <button className="button">✎ Edit</button>
            <button className="button button--danger" onClick={(e) => removeTask(e)}><span style={{fontWeight: 'bold', pointerEvents:'none'}}>✕</span> Delete</button>
            
        </li>

        
    )

}

Task.propTypes = {
    taskDesc: PropTypes.string,
    taskId: PropTypes.number,
    taskDate: PropTypes.string,
    taskCategory: PropTypes.string
}

export default Task