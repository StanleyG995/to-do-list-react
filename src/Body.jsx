import React, { useContext } from 'react'

import { TaskContext } from "./context/TaskContext.jsx";
import List from './components/UI/List/List.jsx'
import Modal from './components/UI/Modal/Modal.jsx'
import Button from './components/UI/Button/Button.jsx'
import FormTaskInfo from './components/Forms/FormTaskInfo.jsx'
import DeleteTask from './components/Forms/DeleteTask.jsx'


import { useForm } from './hooks/useForm.jsx'
import { useModal } from './hooks/useModal.jsx'

const Body = () => {

    const { currentTab, currentTabName, modalType } = useContext( TaskContext )
	const { handleSaveTask } = useForm()
	const { handleModalClose, handleButtonType } = useModal()

	return (
	    <>
			<List source = { currentTab } className={`list-${currentTabName}`}/>
			<Modal 
                buttonPrimary={ handleButtonType(modalType) }>
                {modalType === 'addTask' && <FormTaskInfo />}
                {modalType === 'deleteTask' && <DeleteTask />}
            </Modal>
		</>
	)
}

export default Body
