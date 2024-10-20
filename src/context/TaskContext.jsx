import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

  const currentTasks = useState([])
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [modalType, setModalType] = useState('FormAddTask')

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  const TaskContextValues = {
    currentTasks, 
    
    isModalOpen,
    setIsModalOpen,
    modalType,
    setModalType,

    handleModalOpen

  }

  return (
    <TaskContext.Provider value={ TaskContextValues }>
      {children}
    </TaskContext.Provider>
  );
}

