import PropTypes from 'prop-types'
import './Task.css'

function Task(props) {

    return (
        <li className='task' >

            <div className='task-directional-controls'>
                <button className="button">▲</button>
                <button className="button">▼</button>
            </div>

            <p className="task-desc">{props.taskDesc}</p>
            <span className="task-date">{new Date().toLocaleString()}</span>
            <button className="button button--primary">✔ Done</button>
            <button className="button">✎ Edit</button>
            <button className="button button--danger">X Delete</button>
           
        </li>

        
    )

}

Task.propTypes = {
    taskDesc: PropTypes.string,
}

export default Task