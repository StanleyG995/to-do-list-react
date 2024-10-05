import React, { useState, useContext } from 'react'
import { IsVisibleContext } from './AddNewTask'
import './inputModal.css'


function Input() {

    const [isVisible, setIsVisible] = useContext(IsVisibleContext)

    const closeInputModal = () => {
        setIsVisible(false)
    }

    return (
        <div id='input-overlay' className={`input-overlay ${isVisible ? 'input-visible' : 'input-hidden'}`}>
            <div className="input-modal">
                <label htmlFor="input-task-name" className="input-task-name">Enter task description:</label>

                <div className="input-container">
                    <input id="input-task-name" className="input-task-input" type="text" placeholder='New task' />
                    <button className='button button--danger input-clear'><span style={{fontWeight: 'bold',}}>✕</span> Clear</button>
                </div>
                

                <div className="input-buttons">
                    <button className="button" onClick={closeInputModal}>Cancel</button>
                    <button className="button button--primary">+ Add</button>
                </div>
            </div>
        </div>
    )
}

export default Input