import React, { useState, createContext } from "react"

import Header from "./components/Header/Header.jsx"
import Button from "./components/UI/Button/Button.jsx"
import List from "./List/List.jsx"
import Modal from "./components/UI/Modal/Modal.jsx"

export const ToDoListContext = createContext()

function App() {
	const [currentTasks, setCurrentTasks] = useState([]);
	const [isVisible, setIsVisible] = useState(false)
	const [taskDescription, setTaskDescription] = useState("")
	const [taskCategory, setTaskCategory] = useState("")
	const [taskDate, setTaskDate] = useState('')

	const reassignIds = () => {
		setCurrentTasks(t =>
			t.map((task, index) => ({
				...task,
				id: index,
			}))
		)
	}

	const removeTask = e => {
		setCurrentTasks(t => t.filter(task => `task-${task.id}` !== e.target.closest('li').id))
		reassignIds()
	}

	const contextValues = {
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

		removeTask,
	}

	

	return (
		<ToDoListContext.Provider value={contextValues}>
			<div className='app-wrapper'>
				<Header />
				<Modal />
				<List />
				<Button />
			</div>
		</ToDoListContext.Provider>
	)
}

export default App
