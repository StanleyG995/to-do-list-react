import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import Task from '../Task/Task.jsx'
import './List.css'
import { ToDoListContext } from "../App.jsx"


function List({props}) {

    const {currentTasks} = useContext(ToDoListContext)

    return (
        <div className='task-list-container'>
            <h2 className='task-list-title'>Current tasks:</h2>
            <div className="task-list-outer">
                <div className='task-list-inner'>
                {currentTasks.length === 0 ? <div className='empty-task-list-msg'><p>No current tasks, add some.</p></div> : null}
                <ul className='task-list'>
                    {currentTasks.map((task, index) => <Task key={index} taskId={index} taskDescription={task.description} taskDate={task.date} taskCategory={task.category} taskDue={task.due}/>)}
                </ul> 
                </div>
            </div>
            
        </div>
    )
    
}

List.propTypes = {
    taskListName: PropTypes.string,
}

export default List