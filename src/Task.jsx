import PropTypes from 'prop-types'
import './Task.css'

function Task(props) {

    return (
        <li className='task' >

            <div className='task-directional-controls'>
                <button className='task-arrow'>▲</button>
                <button className='task-arrow'>▼</button>
            </div>

            <p className="task-desc">{props.taskDesc}</p>
            <span className="task-date">{new Date().toLocaleString()}</span>
            
            <button className="button button--primary">✔ Done</button>
            <button className="button">✎ Edit</button>
            <button className="button button--danger"><span style={{fontWeight: 'bold',}}>✕</span> Delete</button>
            
        </li>

        
    )

}

Task.propTypes = {
    taskDesc: PropTypes.string,
}

export default Task