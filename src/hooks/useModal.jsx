import React, { useState, useContext } from 'react'

import { TaskContext } from '../context/TaskContext.jsx';

export const useModal = () => {

    const { isModalOpen, setIsModalOpen, modalType, setModalType } = useContext( TaskContext )
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }
    
    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return { handleModalOpen, handleModalClose }
}