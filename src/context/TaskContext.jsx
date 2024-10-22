import React, { createContext, useState } from "react";

import { taskData } from '../data/taskData.js'

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

  const [currentTasks, setCurrentTasks] = useState( taskData )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('FormAddTask')

  const [currentFilter, setCurrentFilter] = useState('AddedDescend')


  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const TaskContextValues = {
    currentTasks, 
    setCurrentTasks,
    
    isModalOpen,
    setIsModalOpen,
    modalType,
    setModalType,

    handleModalOpen,
    handleModalClose,

    currentFilter,
    setCurrentFilter,

  }

  return (
    <TaskContext.Provider value={ TaskContextValues }>
      {children}
    </TaskContext.Provider>
  );
}

