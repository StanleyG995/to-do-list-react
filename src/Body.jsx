import React, { useContext } from 'react'

import { TaskContext } from "./context/TaskContext.jsx";
import List from './components/UI/List/List.jsx'
import Modal from './components/UI/Modal/Modal.jsx'
import Button from './components/UI/Button/Button.jsx'
import FormTaskInfo from './components/Forms/FormTaskInfo.jsx'

import { useForm } from './hooks/useForm.jsx'
import { useModal } from './hooks/useModal.jsx'

const Body = () => {

    const { currentTab, currentTabName, modal } = useContext( TaskContext )
	const { handleSaveTask } = useForm()
	const { handleModalClose } = useModal()

	return (
	    <>
			<List source = { currentTab } className={`list-${currentTabName}`}/>
			<Modal 
                buttonPrimary={
                    <Button 
                        children="Add task" 
                        classNames="button button--primary button--m" 
                        onClick={() => {handleSaveTask(); handleModalClose()}} 
                    />
                }>
                <h2>Add new task</h2>
                <p>Fill in the task information.</p>
                <FormTaskInfo />
            </Modal>
		</>
	)
}

export default Body
