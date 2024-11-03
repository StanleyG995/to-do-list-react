import React, { useState, useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'

import { useForm } from '../hooks/useForm.jsx'
import { useFirestoreFetchDocument } from './Firestore/useFirestoreFetchDocument.js'

import Button from '../components/UI/Button/Button.jsx'

export const useModal = () => {
    const { modalType, setModalType, setIsModalOpen, taskInfo} = useContext(TaskContext)
    const { handleInputReset, handleSaveTask, handleUpdateTask } = useForm()
    const { data } = useFirestoreFetchDocument('tasks', taskInfo.id)

    const handleModalOpen = (type) => {
        setModalType(type)
        if(modalType === 'addTask') {
            handleInputReset()
        }
        setIsModalOpen(i => !i)
    }
    
    const handleModalClose = () => {
        setIsModalOpen(i => false)
        if(modalType === 'addTask' || modalType === 'editTask') {
            handleInputReset()
        }
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
            case 'deletePermanently':
                return (
                    <Button classNames='button button--m button--danger' onClick={() => {console.log('Task deleted.'); handleModalClose()}}>x Delete task permanently</Button>
                )
            case 'editTask':
                return (
                    <Button classNames='button button--m button--primary' onClick={() => {handleUpdateTask(); handleModalClose()}}>Edit task</Button>
                )
        }
    }

    return { handleModalOpen, handleModalClose, handleButtonType }
}
