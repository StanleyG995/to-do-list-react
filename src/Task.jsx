import PropTypes from 'prop-types'
import './Task.css'

function Task(props) {

    const taskDesc = props.taskDesc

    return (
        <li className='task' >
            <p className="task-desc">{taskDesc}</p>
            <span className="task-date">{new Date().toLocaleString()}</span>
            <button className="task-button task-button--done">✔ Done</button>
            <button className="task-button task-button--edit">✎ Edit</button>
            <button className="task-button task-button--delete">✘ Delete</button>
        </li>
    )

}

Task.propTypes = {
    taskDesc: PropTypes.string.isRequired,
}

export default Task