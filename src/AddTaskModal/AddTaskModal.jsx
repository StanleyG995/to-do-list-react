import React, { useContext } from "react"
import { ToDoListContext } from "../App.jsx"
import "./AddTaskModal.css"

function Input() {
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

	const closeInputModal = () => {
		setIsVisible(false)
	}

	const handleDescriptionChange = e => {
		setTaskDescription(e.target.value)
	}

	const handleCategoryChange = e => {
		setTaskCategory(e.target.value)
	}

	const handleDateChange = e => {	
		if(new Date(e.target.value) >= new Date()) {
			setTaskDate(e.target.value)
		}
		else {
			console.log('Data mniejsza')
		}	
	}

	const clearInput = () => {
		setTaskDescription("")
	}

	const addTask = taskDescription => {
		if (taskDescription !== "" && taskDate !== '') {
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
			setTaskDescription("")
			setTaskDate('')
			setIsVisible(false)
		}
	}


	const handleKeyDown = e => {
		if (e.key === "Enter") {
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
				<div className='add-task-modal-container'>
					<label htmlFor='add-task-modal-desc' className='add-task-modal-label'>
						Enter task description:
					</label>
					<div className='add-task-modal-input-container'>
						<input
							id='add-task-modal-desc'
							className='add-task-modal-input'
							type='text'
							placeholder='New task'
							value={taskDescription}
							onChange={e => handleDescriptionChange(e)}
							onKeyDown={handleKeyDown}
						/>
						<button
							className='button button--danger add-task-modal-clear'
							onClick={clearInput}>
							<span style={{ fontWeight: "bold" }}>✕</span> Clear
						</button>
					</div>
					<label
						htmlFor='add-task-modal-category-select'
						className='add-task-modal-label'>
						Choose category:
					</label>
					<select
						name=''
						defaultValue='Home'
						id='add-task-modal-category-select'
						className='add-task-modal-select'
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
						htmlFor='add-task-modal-date-select'
						className='add-task-modal-label'>
						Set due date:
					</label>
					<input type='date' className='add-task-modal-input' onChange={e => handleDateChange(e)}/>
				</div>

				<div className='add-task-modal-buttons'>
					<button className='button' onClick={closeInputModal}>
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

export default Input
