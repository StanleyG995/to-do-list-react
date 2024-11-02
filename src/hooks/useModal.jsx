import React, { useState, useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'

import { useForm } from '../hooks/useForm.jsx'
import { useFirestoreUpload } from './Firestore/useFirestoreUpload.js'

import Button from '../components/UI/Button/Button.jsx'
import FormTaskInfo from '../components/Forms/FormTaskInfo.jsx'
import Modal from '../components/UI/Modal/Modal.jsx'

import { setIcon } from '../helpers/iconHelpers.js'

export const useModal = () => {
    const { setModal, setIsModalOpen, taskInfo, setTaskInfo} = useContext(TaskContext)
    const { handleInputReset, handleSaveTask } = useForm()
    

    setIcon(taskInfo)

    const handleModalOpen = (type) => {
        console.log('Opening modal with taskInfo:', taskInfo);
        setIsModalOpen(i => !i)
        // if (type === 'addTask') {
        //     setModal(m =>
        //         <Modal 
        //             buttonPrimary={
        //                 <Button 
        //                     children="Add task" 
        //                     classNames="button button--primary button--m" 
        //                     onClick={handleSaveTask} 
        //                 />
        //             }
        //         >
        //             <h2>Add new task</h2>
        //             <p>Fill in the task information.</p>
        //             <FormTaskInfo />
        //         </Modal>
        //     )
        // } else if (type === 'editTask') {
        //     setModal(m =>
        //         <Modal 
        //             buttonPrimary={
        //                 <Button 
        //                     children="Edit task" 
        //                     classNames="button button--primary button--m" 
        //                     onClick={() => console.log('clicked')}
        //                 />
        //             }
        //         >
        //             <FormTaskInfo />
        //         </Modal>
        //     )
        // } else {
        //     setModal(m =>
        //         <Modal 
        //             buttonPrimary={
        //                 <Button 
        //                     children="Delete" 
        //                     classNames="button button--danger button--m" 
        //                     onClick={() => console.log('clicked')}
        //                 />
        //             }
        //         >
        //             <h2>Delete task permanently?</h2>
        //             <p>This operation is irreversible.</p>
        //         </Modal>
        //     )
        // }
    }
    
    const handleModalClose = () => {
        setIsModalOpen(i => false)
        handleInputReset()
    }

    return { handleModalOpen, handleModalClose }
}
