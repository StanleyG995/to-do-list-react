

import { TaskProvider } from "./context/TaskContext.jsx";
import AppContent from './AppContent.jsx'




const App = () => {

	return (
		<TaskProvider>
			<AppContent />
		</TaskProvider>
	)
}

export default App
