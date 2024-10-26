import React, { useState, useContext } from 'react'

import { TaskContext } from '../context/TaskContext.jsx';

import Modal from '../components/UI/Modal/Modal.jsx'

export const useModal = () => {

    const { modal, setModal, isModalOpen, setIsModalOpen, modalType, setModalType } = useContext( TaskContext )
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }
    
    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    const handleModalType = (modalType) => {
        if ( modalType === 'addTask' ) {
            setModal(<Modal buttonPrimary={<Button children='Add task' classNames='button button--primary button--m' onClick={() => console.log('clicked')}/>}>
            <FormTaskInfo />
        </Modal>)
        }

        else if ( modalType === 'editTask' ) {
            setModal(<Modal buttonPrimary={<Button children='Add task' classNames='button button--primary button--m' onClick={() => console.log('clicked')}/>}>
            <FormTaskInfo />
        </Modal>)
        }
        
        else {
            setModal(<Modal buttonPrimary={<Button children='Delete' classNames='button button--danger button--m' onClick={() => console.log('clicked')}/>}>
            <FormTaskInfo />
        </Modal>)
        }
        
        return modal
    }
    

    return { handleModalOpen, handleModalClose }
}