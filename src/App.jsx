import React, { useState, useContext, createContext } from "react"

import Task from "./Task/Task.jsx"
import TaskList from "./TaskList/TaskList.jsx"
import InputModal from "./InputModal/InputModal.jsx"
import AddNewTask from "./AddNewTask/AddNewTask.jsx"
import Header from "./Header/Header.jsx"

export const ToDoListContext = createContext()

function App() {
	const [isVisible, setIsVisible] = useState(false)
	const [taskDesc, setTaskDesc] = useState("")
	const [currentTasks, setCurrentTasks] = useState([])

	const reassignIds = () => {
		setCurrentTasks(t =>
			t.map((task, index) => ({
				...task,
				id: index,
			}))
		)
	}

	const removeTask = e => {
		setCurrentTasks(t => t.filter(task => `task-${task.id}` !== e.target.parentElement.id))
		reassignIds()
	}

	const contextValues = {
		isVisible,
		setIsVisible,
		taskDesc,
		setTaskDesc,
		currentTasks,
		setCurrentTasks,
		removeTask,
	}

	return (
		<ToDoListContext.Provider value={contextValues}>
			<div className='app-wrapper'>
				<Header />
				<InputModal />
				<TaskList />
				<AddNewTask />
			</div>
		</ToDoListContext.Provider>
	)
}

export default App
