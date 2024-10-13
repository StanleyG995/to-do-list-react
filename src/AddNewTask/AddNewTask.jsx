import React, { useEffect, useContext } from "react"
import { ToDoListContext } from "../App.jsx"
import "./AddNewTask.css"

function AddNewTask() {
	const { isVisible, setIsVisible, setTaskCategory } = useContext(ToDoListContext)

	useEffect(() => {
		if (isVisible) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isVisible])

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
		setTaskCategory('🏠 Home')
	}

	return (
		<div className='add-new-task-container'>
			<button
				onClick={(e) => {
					toggleVisibility();
					e.target.blur();
				}}
				className='button button--primary add-new-task'>
				<span style={{ fontWeight: "bold" }}>+</span> Add new task
			</button>
		</div>
	)
}

export default AddNewTask
