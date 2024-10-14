import React, { useState, createContext } from "react"

import TaskList from "./TaskList/TaskList.jsx"
import AddTaskModal from "./AddTaskModal/AddTaskModal.jsx"
import AddNewTask from "./AddNewTask/AddNewTask.jsx"
import DeleteTaskModal from './DeleteTaskModal/DeleteTaskModal.jsx'
import Header from "./Header/Header.jsx"

export const ToDoListContext = createContext()

function App() {
	const [isVisible, setIsVisible] = useState(false)
	const [taskDescription, setTaskDescription] = useState("")
	const [taskCategory, setTaskCategory] = useState("")
	const [taskDate, setTaskDate] = useState('')
	const [currentTasks, setCurrentTasks] = useState([
		{
			id: 0, 
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus felis dolor. Ut ut interdum nibh. Curabitur in hendrerit massa, et gravida leo. Cras commodo ipsum eget pulvinar ullamcorper. Vestibulum vel scelerisque leo, sed posuere elit. Phasellus venenatis purus vel nisi iaculis, sed sollicitudin risus commodo.', 
			date: new Date().toLocaleDateString('pl-PL', {
				day: '2-digit', 
				month: '2-digit', 
				year: 'numeric',
			}),
			due: new Date().toLocaleDateString('pl-PL', {
				day: '2-digit', 
				month: '2-digit', 
				year: 'numeric',
			}),
			category: '🏠 Home'
		},
		{
			id: 1, 
			description: 'Prepare for exam', 
			date: new Date().toLocaleDateString('pl-PL', {
				day: '2-digit', 
				month: '2-digit', 
				year: 'numeric',
			}),
			due: new Date().toLocaleDateString('pl-PL', {
				day: '2-digit', 
				month: '2-digit', 
				year: 'numeric',
			}),
			category: '🎓 Study'
		},
		{
			id: 2, 
			description: 'Go to the gym', 
			date: new Date().toLocaleDateString('pl-PL', {
				day: '2-digit', 
				month: '2-digit', 
				year: 'numeric',
			}),
			due: new Date().toLocaleDateString('pl-PL', {
				day: '2-digit', 
				month: '2-digit', 
				year: 'numeric',
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
