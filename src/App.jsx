import { TaskProvider } from "./context/TaskContext.jsx";

import Header from './components/Header/Header.jsx'
import Button from './components/UI/Button/Button.jsx'



const App = () => {
	
	return (
		<TaskProvider>
			<div className='app-wrapper'>
				<Header />
				<Button children={<p>Primary action</p>} classes='button button--primary' action={() => {console.log("I'm primary button!")}}/>
				<Button children={<p>Secondary action</p>} classes='button button--secondary' action={() => {console.log("I'm secondary button!")}}/>
				<Button children={<p>Warning!</p>} classes='button button--danger' action={() => {console.log("I'm danger button!")}}/>
			</div>
			<div className="backdrop-image">
			</div>
		</TaskProvider>
	)
}

export default App
