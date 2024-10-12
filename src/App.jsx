import React, { useState, createContext } from "react"

import TaskList from "./TaskList/TaskList.jsx"
import AddTaskModal from "./AddTaskModal/AddTaskModal.jsx"
import AddNewTask from "./AddNewTask/AddNewTask.jsx"
import Header from "./Header/Header.jsx"

export const ToDoListContext = createContext()

function App() {
	const [isVisible, setIsVisible] = useState(false)
	const [taskDescription, setTaskDescription] = useState("")
	const [taskCategory, setTaskCategory] = useState("")
	const [currentTasks, setCurrentTasks] = useState([
		{
			id: 0, 
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus felis dolor. Ut ut interdum nibh. Curabitur in hendrerit massa, et gravida leo. Cras commodo ipsum eget pulvinar ullamcorper. Vestibulum vel scelerisque leo, sed posuere elit. Phasellus venenatis purus vel nisi iaculis, sed sollicitudin risus commodo. Nullam eget pellentesque ipsum, eu auctor justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum dui. Donec posuere odio vel ligula iaculis, eu vestibulum nisl tempus. Donec consectetur magna nec tellus hendrerit tempor.', 
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
			description: 'Prepare for exam', 
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
			description: 'Go to the gym', 
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
		setCurrentTasks(t => t.filter(task => `task-${task.id}` !== e.target.closest('li').id))
		reassignIds()
	}

	const contextValues = {
		isVisible,
		setIsVisible,
		taskDescription,
		setTaskDescription,
		currentTasks,
		setCurrentTasks,
		removeTask,
		taskCategory,
		setTaskCategory,
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
