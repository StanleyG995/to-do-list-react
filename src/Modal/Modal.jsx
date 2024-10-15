import React, { useState, useContext } from "react"
import { ToDoListContext } from "../App.jsx"
import "./Modal.css"

function Modal() {

	const {
		isVisible,
		setIsVisible,

		taskDescription,
		setTaskDescription,

		taskCategory,
		setTaskCategory,

		taskDate,
		setTaskDate,

		currentTasks,
		setCurrentTasks,

	} = useContext(ToDoListContext)

	const [errorMessages, setErrorMessages] = useState({
        description: "",
        date: "",
	})

	const closeModal = () => {
		setIsVisible(false)
		setTaskDescription('')
		setTaskDate('')
		setErrorMessages({ description: "", date: "" })
	}

	const handleDescriptionChange = e => {
		setTaskDescription(e.target.value)
	}

	const handleCategoryChange = e => {
		setTaskCategory(e.target.value)
	}

	const handleDateChange = e => {	
		setTaskDate(e.target.value)
	}

	const clearInput = () => {
		setTaskDescription("")
	}

	const validateInputs = () => {

        let hasError = false

        const newErrorMessages = { description: "", date: "" }

        if (taskDescription === '') {
            newErrorMessages.description = "Task description must not be empty."
            hasError = true;
        }

        if (taskDate === '' || new Date(taskDate) < new Date()) {
            newErrorMessages.date = "Invalid date."
            hasError = true
        }

        setErrorMessages(newErrorMessages)
		
        return hasError
    };
	
	const addTask = taskDescription => {

		if (!validateInputs()) {
			const newTask = {
				id: currentTasks.length,
				description: taskDescription,
				category: taskCategory,
				date: new Date().toLocaleDateString("pl-PL", {
					day: "2-digit",
					month: "2-digit",
					year: "numeric",
				}),
				due: new Date(taskDate).toLocaleDateString("pl-PL", {
					day: "2-digit",
					month: "2-digit",
					year: "numeric",
				}),
			}
			setCurrentTasks(t => [...t, newTask])
			closeModal()
		}
	
	}

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			addTask(taskDescription)
		}
	}

	return (
		
		<div 
			id='modal-overlay'
			className={`modal-overlay ${
				isVisible ? "modal-visible" : "modal-hidden"
			}`}>
			<div className='modal'>
				<div className='row'>
					<label htmlFor='modal-desc' className='label'>
						Enter task description:
					</label>
					<div className='row'>
						<input
							id='modal-desc'
							className='modal-input'
							type='text'
							placeholder='New task'
							value={taskDescription}
							onChange={e => handleDescriptionChange(e)}
							onKeyDown={handleKeyDown}
						/>
						<button
							className='button button--danger modal-clear'
							onClick={clearInput}>
							<span style={{ fontWeight: "bold" }}>✕</span> Clear
						</button>
					</div>
					<p className="error-message">{errorMessages.description}</p>
					<label
						htmlFor='modal-category-select'
						className='modal-label'>
						Choose category:
					</label>
					<select
						name=''
						defaultValue='Home'
						id='modal-category-select'
						className='modal-select'
						onChange={e => handleCategoryChange(e)}>
						<option value='🏠 Home'>🏠 Home</option>
						<option value='🎓 Study'>🎓 Study</option>
						<option value='💼 Work'>💼 Work</option>
						<option value='👪 Family'>👪 Family</option>
						<option value='💪 Sport'>💪 Sport</option>
						<option value='🚗 Car'>🚗 Car</option>
						<option value='🎸 Hobby'>🎸 Hobby</option>
					</select>

					<label
						htmlFor='modal-date-select'
						className='modal-label'>
						Set due date:
					</label>
					<input 
						type='date' 
						className='modal-input'
						value={taskDate}
						onChange={e => handleDateChange(e)}/>
					<p className="error-message">{errorMessages.date}</p>
				</div>

				<div className='modal-buttons'>
					<button className='button' onClick={closeModal}>
						Cancel
					</button>
					<button
						className='button button--primary'
						onClick={() => addTask(taskDescription)}>
						+ Add
					</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
