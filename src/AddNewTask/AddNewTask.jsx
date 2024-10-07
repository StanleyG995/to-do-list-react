import React, { useState, useContext } from "react"
import InputModal from "../InputModal/InputModal.jsx"
import { ToDoListContext } from "../App.jsx"
import "./AddNewTask.css"

function AddNewTask() {
	const { isVisible, setIsVisible } = useContext(ToDoListContext)

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
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
