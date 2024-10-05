import React, { useState, useContext } from 'react'
import { IsVisibleContext } from './AddNewTask'
import './inputModal.css'


function Input() {

    const [isVisible, setIsVisible] = useContext(IsVisibleContext)
    const [taskDesc, setTaskDesc] = useState('')

    const closeInputModal = () => {
        setIsVisible(false)
    }

    const handleInputChange = (e) => {
        setTaskDesc(e.target.value)
        console.log(taskDesc)
    }

    const clearInput = () => {
        setTaskDesc('')
    }

    return (
        <div id='input-modal-overlay' className={`input-modal-overlay ${isVisible ? 'input-modal-visible' : 'input-modal-hidden'}`}>
            <div className="input-modal-modal">
                <label htmlFor="input-modal-task-name" className="input-modal-task-name">Enter task description:</label>

                <div className="input-modal-container">
                    <input id="input-modal-task-name" className="input-modal-task-input" type="text" placeholder='New task' value={taskDesc} onChange={(e) => handleInputChange(e)} />
                    <button className='button button--danger input-modal-clear' onClick={clearInput}><span style={{fontWeight: 'bold',}}>✕</span> Clear</button>
                </div>
                

                <div className="input-modal-buttons">
                    <button className="button" onClick={closeInputModal}>Cancel</button>
                    <button className="button button--primary">+ Add</button>
                </div>
            </div>
        </div>
    )
}

export default Input