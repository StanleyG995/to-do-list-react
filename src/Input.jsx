import React, { useState, useContext } from 'react'
import { IsVisibleContext } from './AddNewTask'
import './input.css'


function Input() {

    const isVisible = useContext(IsVisibleContext)

    return (
        <div id='input-overlay' className={`input-overlay ${isVisible ? 'input-visible' : 'input-hidden'}`}>
            <div className="input-modal">
                <label htmlFor="input-task-name" className="input-task-name">Enter task description:</label>

                <div className="input-container">
                    <input id="input-task-name" className="input-task-input" type="text" />
                    <button className='button button--danger input-clear'><span style={{fontWeight: 'bold',}}>✕</span> Clear</button>
                </div>
                

                <div className="input-buttons">
                    <button className="button">Cancel</button>
                    <button className="button button--primary">+ Add</button>
                </div>
            </div>
        </div>
    )
}

export default Input