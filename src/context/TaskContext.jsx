import React, { createContext, useState } from "react";

import { data } from '../data/taskData.js'

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

  
  const [currentTasks, setCurrentTasks] = useState( data.filter(item => item.status === 'current') )
  const [historyTasks, setHistoryTasks] = useState( data.filter(item => item.status === 'history') )
  const [trashTasks, setTrashTasks] = useState( data.filter(item => item.status === 'trash') )
  
  const [currentTab, setCurrentTab] = useState( currentTasks )
  const [currentTabName, setCurrentTabName] = useState( 'current' )

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
    historyTasks,
    setHistoryTasks,
    trashTasks,
    setTrashTasks,

    currentTab,
    setCurrentTab,
    currentTabName,
    setCurrentTabName,
    
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

