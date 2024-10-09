import React, {useContext } from "react"
import { ToDoListContext } from "../App.jsx"
import "./AddTaskModal.css"

function Input() {

	const {isVisible, setIsVisible, taskDescription, setTaskDescription, currentTasks, setCurrentTasks} = useContext(ToDoListContext)

	const closeInputModal = () => {
		setIsVisible(false)
	}

	const handleInputChange = e => {
		setTaskDescription(e.target.value)
	}

	const clearInput = () => {
		setTaskDescription("")
	}

	const addTask = (taskDescription) => {
		if(taskDescription !== '') {
			const newTask = { id: currentTasks.length, description: taskDescription, date: new Date().toLocaleDateString('en-GB', {
  				day: '2-digit', 
 				month: '2-digit', 
  				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit'
			})}
    		setCurrentTasks(t => [...t, newTask]);
			setTaskDescription("")
			setIsVisible(false)
		}
    }

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			addTask(taskDescription)
		}
	}

	return (
		<div
			id='add-task-modal-overlay'
			className={`add-task-modal-overlay ${
				isVisible ? "add-task-modal-visible" : "add-task-modal-hidden"
			}`}>
			<div className='add-task-modal'>
				<label
					htmlFor='add-task-modal-name'
					className='add-task-modal-name'>
					Enter task description:
				</label>

				<div className='add-task-modal-container'>
					<input
						id='add-task-modal-name'
						className='add-task-modal-input'
						type='text'
						placeholder='New task'
						value={taskDescription}
						onChange={e => handleInputChange(e)}
						onKeyDown={handleKeyDown}
					/>
					<button
						className='button button--danger add-task-modal-clear'
						onClick={clearInput}>
						<span style={{ fontWeight: "bold" }}>✕</span> Clear
					</button>
				</div>

				<div className='add-task-modal-buttons'>
					<button className='button' onClick={closeInputModal}>
						Cancel
					</button>
					<button className='button button--primary' onClick={() => addTask(taskDescription)}>+ Add</button>
				</div>
			</div>
		</div>
	)
}

export default Input
