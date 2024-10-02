import PropTypes from 'prop-types'
import './Task.css'

function Task(props) {

    const taskDesc = props.taskDesc

    return (
        <li className='task' >

            <div className='task-directional-controls'>
                <button className="task-button">▲</button>
                <button className="task-button">▼</button>
            </div>

            <p className="task-desc">{taskDesc}</p>
            <span className="task-date">{new Date().toLocaleString()}</span>
            <button className="task-button task-button--done">✔ Done</button>
            <button className="task-button task-button--edit">✎ Edit</button>
            <button className="task-button task-button--delete">X Delete</button>
           
        </li>
    )

}

Task.propTypes = {
    taskDesc: PropTypes.string.isRequired,
}

export default Task