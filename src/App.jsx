import TaskList from './TaskList.jsx'
import Input from './Input.jsx'
import AddNewTask from './AddNewTask.jsx'

function App() {

  return (
    <>
      <AddNewTask>
        <Input />
      </AddNewTask>
      
      <TaskList />  
    </>
  )
}

export default App
