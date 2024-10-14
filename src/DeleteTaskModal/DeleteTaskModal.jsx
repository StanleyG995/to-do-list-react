import React, { useState, useContext } from "react"
import { ToDoListContext } from "../App.jsx"
import "./DeleteTaskModal.css"

function DeleteTaskModal() {
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


	return (
		<div
			id='delete-task-modal-overlay'
			className={`delete-task-modal-overlay ${
				isVisible ? "delete-task-modal-visible" : "delete-task-modal-visible"
			}`}>
			<div className='delete-task-modal'>
				<div className='delete-task-modal-container'>
                    <h2>Warning</h2>
					<p htmlFor='delete-task-modal-desc' className='add-task-modal-label'>
						Are you sure you want to delete the task? It will be <span style={{fontWeight: 'bold',}}>permanently removed</span> from the list.
					</p>
                </div>
				<div className='add-task-modal-buttons'>
					<button className='button'>
						Cancel
					</button>
					<button
						className='button button--danger'>
						Delete
					</button>
				</div>
			</div>
        </div>
	)
}

export default DeleteTaskModal
