import { TaskProvider } from "./context/TaskContext.jsx";

import Header from './components/Header/Header.jsx'
import Button from './components/UI/Button/Button.jsx'
import ErrorMessage from './components/UI/ErrorMessage/ErrorMessage.jsx'
import Modal from './components/UI/Modal/Modal.jsx'

const App = () => {
	return (
		<TaskProvider>
			<div className='app-wrapper'>
				<Header />
				
			</div>

			<Modal buttonPrimary={<Button children='Primary action' classNames='button button--primary button--m' onClick={() => console.log('clicked')}/>} />



			<div className="backdrop-image">
			</div>
		</TaskProvider>
	)
}

export default App
