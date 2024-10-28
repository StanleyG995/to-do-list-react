import React, { useState, useContext, useEffect } from 'react'

import { TaskContext } from '../context/TaskContext.jsx';

import { useForm } from '../hooks/useForm.jsx'
import { useFirestore } from '../hooks/useFirestore.js'
import { useFirestoreUpload } from '../hooks/useFirestoreUpload.js'

import Button from '../components/UI/Button/Button.jsx'
import FormTaskInfo from '../components/Forms/FormTaskInfo.jsx'
import Modal from '../components/UI/Modal/Modal.jsx'

export const useModal = () => {

    const { setModal, isModalOpen, setIsModalOpen, taskInfo, setTaskInfo} = useContext( TaskContext )
    const { handleInputReset } = useForm()
    const { saveData, loading } = useFirestoreUpload('tasks')
    const { fetchData } = useFirestore('tasks')

    useEffect(() => {
        setTaskInfo(taskInfo)
    }, [taskInfo])
    
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }
    
    const handleModalClose = () => {
        setIsModalOpen(false)
        // handleInputReset()
    }

    const handleSaveTask = () => {
        if (!loading) {
            // Zaktualizuj obiekt taskInfo bezpośrednio z kontekstu
            const updatedTaskInfo = { ...taskInfo }; // lub taskInfo może być przekazywane jako argument
            console.log('Task info przed zapisaniem:', updatedTaskInfo)
            saveData(updatedTaskInfo);
            fetchData();
        }
    }

    const handleModalType = ( type ) => {
        if ( type === 'addTask' ) {
            setModal(<Modal buttonPrimary={<Button children='Add task' classNames='button button--primary button--m' onClick={() => handleSaveTask()}/>}>
            <h2>Add new task</h2>
            <p>Fill in the task information.</p>
            <FormTaskInfo />
            </Modal>)
        }

        else if ( type === 'editTask' ) {
            setModal(<Modal buttonPrimary={<Button children='Edit task' classNames='button button--primary button--m' onClick={() => console.log('clicked')}/>}>
            <FormTaskInfo />
        </Modal>)
        }
        
        else {
            setModal(<Modal buttonPrimary={<Button children='Delete' classNames='button button--danger button--m' onClick={() => console.log('clicked')}/>}>
            <h2>Delete task permanently?</h2>
            <p>This operations is irreversible.</p>
        </Modal>)
        }

        handleModalOpen()
        
    }

    return { handleModalOpen, handleModalClose, handleModalType }
}