import PropTypes from 'prop-types'
import './Task.css'

function Task(props) {

    const taskDesc = props.taskDesc

    return (
        <li className='task' >
            <p className="task-desc">{taskDesc}</p>
            <span className="task-date">{new Date().toLocaleString()}</span>
        </li>
    )

}

Task.propTypes = {
    taskDesc: PropTypes.string,
}

export default Task