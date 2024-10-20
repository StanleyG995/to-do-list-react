import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

  const currentTasks = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('FormAddTask')

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const TaskContextValues = {
    currentTasks, 
    
    isModalOpen,
    setIsModalOpen,
    modalType,
    setModalType,

    handleModalOpen,
    handleModalClose,

  }

  return (
    <TaskContext.Provider value={ TaskContextValues }>
      {children}
    </TaskContext.Provider>
  );
}

