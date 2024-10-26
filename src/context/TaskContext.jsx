import React, { createContext, useState, useEffect } from "react"
import useFirestore from '../hooks/useFirestore' // Importuj hook

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {

  const { data: firestoreTasks, loading, error } = useFirestore('tasks')
  const [currentTasks, setCurrentTasks] = useState([])
  const [historyTasks, setHistoryTasks] = useState([])
  const [trashTasks, setTrashTasks] = useState([])

  const [currentTab, setCurrentTab] = useState([])
  const [currentTabName, setCurrentTabName] = useState('current')
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [currentSort, setCurrentSort] = useState('AddedDescend')
  const [ascending, setAscending] = useState(true)

  

  useEffect(() => {
    if (!loading && firestoreTasks) {
      setCurrentTasks(firestoreTasks.filter(item => item.status === 'current'))
      setHistoryTasks(firestoreTasks.filter(item => item.status === 'history'))
      setTrashTasks(firestoreTasks.filter(item => item.status === 'trash'))

      setCurrentTab(firestoreTasks.filter(item => item.status === 'current'))
    }
  }, [firestoreTasks, loading])

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

    currentSort,
    setCurrentSort,
    ascending,
    setAscending,
  }

  return (
    <TaskContext.Provider value={TaskContextValues}>
      {children}
    </TaskContext.Provider>
  )
}
