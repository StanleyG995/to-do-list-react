function Task() {

    return (
        <li className='task'>
            <p className="task-desc">Task descritption</p>
            <span className="task-date">{new Date().toLocaleString()}</span>
        </li>
    )

}

export default Task