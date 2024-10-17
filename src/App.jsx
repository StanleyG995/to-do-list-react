import { TaskProvider } from "./context/TaskContext.jsx";

import Header from './components/Header/Header.jsx'

const App = () => {
	
	return (
		<TaskProvider>
			<div className='app-wrapper'>
				<Header />
			</div>
			<div className="backdrop-image">
			</div>
		</TaskProvider>
	)
}

export default App
