import React, { createContext, useState } from "react";

import { currentTaskData, historyData, trashData } from '../data/taskData.js'

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

  const [currentTasks, setCurrentTasks] = useState( currentTaskData )
  const [historyTasks, setHistoryTasks] = useState( currentTaskData )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('FormAddTask')

  const [currentSort, setCurrentSort] = useState('AddedDescend')

  const [ascending, setAscending] = useState(true);

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

    currentSort,
    setCurrentSort,
    ascending,
    setAscending,
  }

  return (
    <TaskContext.Provider value={ TaskContextValues }>
      {children}
    </TaskContext.Provider>
  );
}

