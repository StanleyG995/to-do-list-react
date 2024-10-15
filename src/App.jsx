import React, { useState, createContext } from "react"

import TaskList from "./TaskList/TaskList.jsx"
import AddTaskModal from "./AddTaskModal/AddTaskModal.jsx"
import AddNewTask from "./Button/Button.jsx"
import DeleteTaskModal from './DeleteTaskModal/DeleteTaskModal.jsx'
import Header from "./Header/Header.jsx"

export const ToDoListContext = createContext()

function App() {
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
				<AddTaskModal />
				<DeleteTaskModal />
				<TaskList />
				<AddNewTask />
			</div>
		</ToDoListContext.Provider>
	)
}

export default App
