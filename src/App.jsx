import React, {useState, useContext, createContext} from 'react'

import TaskList from "./TaskList/TaskList.jsx"
import InputModal from "./InputModal/InputModal.jsx"
import AddNewTask from "./AddNewTask/AddNewTask.jsx"
import Header from "./Header/Header.jsx"

export const ToDoListContext = createContext()

function App() {

  const [isVisible, setIsVisible] = useState(false)
	const [taskDesc, setTaskDesc] = useState("")
  const [currentTasks, setCurrentTasks] = useState(['Walk the dog', 'Cook the dinner', 'Fix the leaking sink', 'Do laundry', 'Work on a project', 'Meet with friends', 'Study for exam', 'Refuel the car', 'Water the plants', 'Go to the gym'])
  
  const contextValues = {
    isVisible,
    setIsVisible,
    taskDesc,
    setTaskDesc,
    currentTasks,
    setCurrentTasks,
  }

	return (
    <ToDoListContext.Provider value={contextValues}>
      <div className='app-wrapper'>
        <Header />
        <AddNewTask />
        <InputModal />
        <TaskList />
      </div>
    </ToDoListContext.Provider>
	)
}

export default App
