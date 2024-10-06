import React, { useState, useContext } from "react"
import { ToDoListContext } from "../App.jsx"
import Task from '../Task/Task.jsx'
import "./InputModal.css"

function Input() {

	const {isVisible, setIsVisible, taskDesc, setTaskDesc, currentTasks, setCurrentTasks} = useContext(ToDoListContext)

	const closeInputModal = () => {
		setIsVisible(false)
	}

	const handleInputChange = e => {
		setTaskDesc(e.target.value)
	}

	const clearInput = () => {
		setTaskDesc("")
	}

	const addTask = (taskDesc) => {
        const newTask = { id: currentTasks.length, desc: taskDesc }; // Tworzymy obiekt z ID i opisem
    	setCurrentTasks([...currentTasks, newTask]); // Aktualizujemy stan tablicy zadań
		setTaskDesc("")
		setIsVisible(false)
    }

	const removeTask = (index) => {
		currentTasks.filter((task, i) => i !== index)
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			addTask(taskDesc)
		}
	}

	return (
		<div
			id='input-modal-overlay'
			className={`input-modal-overlay ${
				isVisible ? "input-modal-visible" : "input-modal-hidden"
			}`}>
			<div className='input-modal-modal'>
				<label
					htmlFor='input-modal-task-name'
					className='input-modal-task-name'>
					Enter task description:
				</label>

				<div className='input-modal-container'>
					<input
						id='input-modal-task-name'
						className='input-modal-task-input'
						type='text'
						placeholder='New task'
						value={taskDesc}
						onChange={e => handleInputChange(e)}
						onKeyDown={handleKeyDown}
					/>
					<button
						className='button button--danger input-modal-clear'
						onClick={clearInput}>
						<span style={{ fontWeight: "bold" }}>✕</span> Clear
					</button>
				</div>

				<div className='input-modal-buttons'>
					<button className='button' onClick={closeInputModal}>
						Cancel
					</button>
					<button className='button button--primary' onClick={() => addTask(taskDesc)}>+ Add</button>
				</div>
			</div>
		</div>
	)
}

export default Input
