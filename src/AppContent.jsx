import React, { useContext } from 'react'

import { TaskProvider, TaskContext } from "./context/TaskContext.jsx";

import Header from './components/Header/Header.jsx'
import Button from './components/UI/Button/Button.jsx'
import ErrorMessage from './components/UI/ErrorMessage/ErrorMessage.jsx'
import Modal from './components/UI/Modal/Modal.jsx'
import List from './components/UI/List/List.jsx'

const AppContent = () => {

    const { currentTab, setCurrentTab, currentTasks, historyTasks, trashTasks } = useContext( TaskContext )

    setCurrentTab( currentTasks )
	return (
		<>
			<div className='app-wrapper'>
				<Header />
				<List source={ currentTasks }/>
			</div>

			<Modal buttonPrimary={<Button children='Primary action' classNames='button button--primary button--m' onClick={() => console.log('clicked')}/>} />

			<div className="backdrop-image">
			</div>
		</>
	)
}

export default AppContent
