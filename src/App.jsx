import TaskList from './TaskList.jsx'
import Input from './Input.jsx'
import AddNewTask from './AddNewTask.jsx'

function App() {

  return (
    <div className='app-wrapper'>
      <h1 className='app-title'>To do list</h1>
      <AddNewTask>
        <Input />
      </AddNewTask>

      <h2 className='app-title'>Current tasks</h2>
      <TaskList />  
    
    </div>
  )
}

export default App
