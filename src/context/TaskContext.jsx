import React, { createContext, useState, useEffect } from "react"
import  { useFirestore } from '../hooks/useFirestore'

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {

  const { data: firestoreTasks, loading, error, fetchData } = useFirestore('tasks')
  const [currentTasks, setCurrentTasks] = useState([])
  const [historyTasks, setHistoryTasks] = useState([])
  const [trashTasks, setTrashTasks] = useState([])

  const [currentTab, setCurrentTab] = useState([])
  const [currentTabName, setCurrentTabName] = useState('current')

  const [modal, setModal] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [currentID, setCurrentID] = useState(0)

  const [currentSort, setCurrentSort] = useState('AddedDescend')
  const [ascending, setAscending] = useState(true)

  const [taskInfo, setTaskInfo] = useState( {
    id: '',
    category: 'home',
    categoryIcon: 'fa-solid fa-home',
    description: '',
    dateAdded: '',
    dateDue: '',
    priority: 'low',
    status: 'current',
  })

  useEffect(() =>  {
    fetchData()
  }, [firestoreTasks, loading])

  useEffect(() => {
      setCurrentTasks(c => [...firestoreTasks].filter(item => item.status === 'current'))
      setHistoryTasks(h => [...firestoreTasks].filter(item => item.status === 'history'))
      setTrashTasks(t => [...firestoreTasks].filter(item => item.status === 'trash'))

      setCurrentTab(c => [...firestoreTasks].filter(item => item.status === 'current'))
    }, [firestoreTasks, loading])


  const TaskContextValues = {
    currentID,
    setCurrentID,

    taskInfo,
    setTaskInfo,

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

    modal,
    setModal,
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
