import { TaskProvider } from "./context/TaskContext.jsx";

import Header from './components/Header/Header.jsx'
import Button from './components/UI/Button/Button.jsx'



const App = () => {
	
	return (
		<TaskProvider>
			<div className='app-wrapper'>
				<Header />
				<section className="row row--flex-center">
					<Button children={<p>Primary action</p>} classes='button button--primary' onClick={() => {console.log("I'm primary button!")}}/>
					<Button children={<p>Secondary action</p>} classes='button button--secondary' onClick={() => {console.log("I'm secondary button!")}}/>
					<Button children={<p>Warning!</p>} classes='button button--danger' onClick={() => {console.log("I'm danger button!")}}/>
				</section>
			</div>
			<div className="backdrop-image">
			</div>
		</TaskProvider>
	)
}

export default App
