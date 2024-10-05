import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Task from './Task.jsx'
import './TaskList.css'


function TaskList(props) {

    const [tasks, setTasks] = useState(['Walk the dog', 'Cook the dinner', 'Fix the leaking sink', 'Do laundry', 'Work on a project', 'Meet with friends', 'Study for exam', 'Refuel the car', 'Water the plants', 'Go to the gym'])

    const addTask = () => {
        
    }

    console.log(tasks)

    return (
        <div className='task-list-container'>
            <h2 className='task-list-title'>Current tasks:</h2>
            <div className="task-list-outer">
                <div className='task-list-inner'>
                <ul className='task-list'>
                {tasks.map((task, index) => <Task key={index} taskDesc={task}/>)}
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