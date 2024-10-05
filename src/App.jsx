import TaskList from './TaskList.jsx'
import InputModal from './InputModal.jsx'
import AddNewTask from './AddNewTask.jsx'
import Header from './Header.jsx'

function App() {

  return (
    <div className='app-wrapper'>
      <Header />

      <AddNewTask>
        <InputModal />
      </AddNewTask>

      <TaskList />  
    
    </div>
  )
}

export default App
