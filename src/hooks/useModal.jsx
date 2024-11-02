import React, { useState, useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'

import { useForm } from '../hooks/useForm.jsx'
import { useFirestoreUpload } from './Firestore/useFirestoreUpload.js'

import Button from '../components/UI/Button/Button.jsx'
import FormTaskInfo from '../components/Forms/FormTaskInfo.jsx'
import Modal from '../components/UI/Modal/Modal.jsx'

export const useModal = () => {
    const { setModal, setIsModalOpen, taskInfo} = useContext(TaskContext)
    const { handleInputReset } = useForm()
    const { saveData } = useFirestoreUpload('tasks')

    const handleModalOpen = () => {
        setIsModalOpen(i => !i)
    }
    
    const handleModalClose = () => {
        setIsModalOpen(i => false)
        handleInputReset()
    }

    const handleSaveTask = () => {
        saveData(taskInfo)
        handleModalClose()
        handleInputReset()
    }

    const handleModalType = (type) => {
        if (type === 'addTask') {
            setModal(m =>
                <Modal 
                    buttonPrimary={
                        <Button 
                            children="Add task" 
                            classNames="button button--primary button--m" 
                            onClick={handleSaveTask} 
                        />
                    }
                >
                    <h2>Add new task</h2>
                    <p>Fill in the task information.</p>
                    <FormTaskInfo />
                </Modal>
            )
        } else if (type === 'editTask') {
            setModal(m =>
                <Modal 
                    buttonPrimary={
                        <Button 
                            children="Edit task" 
                            classNames="button button--primary button--m" 
                            onClick={() => console.log('clicked')}
                        />
                    }
                >
                    <FormTaskInfo />
                </Modal>
            )
        } else {
            setModal(m =>
                <Modal 
                    buttonPrimary={
                        <Button 
                            children="Delete" 
                            classNames="button button--danger button--m" 
                            onClick={() => console.log('clicked')}
                        />
                    }
                >
                    <h2>Delete task permanently?</h2>
                    <p>This operation is irreversible.</p>
                </Modal>
            )
        }

        handleModalOpen()
    }

    return { handleModalOpen, handleModalClose, handleModalType }
}
