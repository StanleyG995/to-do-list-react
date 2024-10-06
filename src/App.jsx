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

	const removeTask = id => {
		setCurrentTasks(currentTasks.filter(task => task.id !== id)) // Filtrujemy tablicę i ustawiamy nową bez zadania o danym ID
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
