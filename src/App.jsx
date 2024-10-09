import React, { useState, useContext, createContext } from "react"

import Task from "./Task/Task.jsx"
import TaskList from "./TaskList/TaskList.jsx"
import AddTaskModal from "./AddTaskModal/AddTaskModal.jsx"
import AddNewTask from "./AddNewTask/AddNewTask.jsx"
import Header from "./Header/Header.jsx"

export const ToDoListContext = createContext()

function App() {
	const [isVisible, setIsVisible] = useState(false)
	const [taskDesc, setTaskDesc] = useState("")
	const [currentTasks, setCurrentTasks] = useState([
		{
			id: 0, 
			desc: 'Do the laundry', 
			date: new Date().toLocaleDateString('en-GB', {
				day: '2-digit', 
				month: '2-digit', 
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit', 
			}),
			category: '🏠 Home'
		},
		{
			id: 1, 
			desc: 'Prepare for exam', 
			date: new Date().toLocaleDateString('en-GB', {
				day: '2-digit', 
				month: '2-digit', 
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit', 
			}),
			category: '🎓 Study'
		},
		{
			id: 2, 
			desc: 'Go to the gym', 
			date: new Date().toLocaleDateString('en-GB', {
				day: '2-digit', 
				month: '2-digit', 
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit', 
			}),
			category: '💪 Sport'
		},
	])

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
				<AddTaskModal />
				<TaskList />
				<AddNewTask />
			</div>
		</ToDoListContext.Provider>
	)
}

export default App
