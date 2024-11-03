import React, { useState, useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'

import { useForm } from '../hooks/useForm.jsx'
import { useFirestoreUpload } from './Firestore/useFirestoreUpload.js'

import Button from '../components/UI/Button/Button.jsx'
import FormTaskInfo from '../components/Forms/FormTaskInfo.jsx'
import Modal from '../components/UI/Modal/Modal.jsx'



export const useModal = () => {
    const { setModalType, setIsModalOpen, taskInfo, setTaskInfo} = useContext(TaskContext)
    const { handleInputReset, handleSaveTask } = useForm()

    const handleModalOpen = (type) => {
        setModalType(type)
        setIsModalOpen(i => !i)
    }
    
    const handleModalClose = () => {
        setIsModalOpen(i => false)
        handleInputReset()
    }

    const handleButtonType = (type) => {
        switch (type) {
            case 'addTask': 
                return (
                    <Button classNames='button button--m button--primary' onClick={() => {handleSaveTask(); handleModalClose()}}>+ Add task</Button>
                )
                break;
            case 'deleteTask':
                return (
                    <Button classNames='button button--m button--danger' onClick={() => {console.log('Task deleted.'); handleModalClose()}}>x Delete task</Button>
                )
        }
    }

    return { handleModalOpen, handleModalClose, handleButtonType }
}
