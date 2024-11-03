import React, { createContext, useState, useEffect } from "react"
import  { useFirestoreFetch } from '../hooks/Firestore/useFirestoreFetch.js'
import  { useFirestoreUpload } from '../hooks/Firestore/useFirestoreUpload.js'

import { formatInputDate, formatDate } from '../helpers/dateHelpers.js'

import { setIcon } from '../helpers/iconHelpers.js'

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {

  const { data: firestoreTasks, loading, error } = useFirestoreFetch('tasks')
  const { saveData } = useFirestoreUpload()
  const [currentTasks, setCurrentTasks] = useState([])
  const [historyTasks, setHistoryTasks] = useState([])
  const [trashTasks, setTrashTasks] = useState([])

  const [currentTab, setCurrentTab] = useState([])
  const [currentTabName, setCurrentTabName] = useState('current')

  const [modalType, setModalType] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [currentSort, setCurrentSort] = useState('AddedDescend')
  const [ascending, setAscending] = useState(true)

  const [taskInfo, setTaskInfo] = useState( {
    id: '',
    category: 'Home',
    categoryIcon: 'fa-solid fa-home',
    description: '',
    dateAdded: formatInputDate(new Date()),
    dateDue: formatInputDate(new Date()),
    priority: 'low',
    status: 'current',
  })

  useEffect(() => {
      setCurrentTasks(c => firestoreTasks.filter(item => item.status === 'current'))
      setHistoryTasks(h => firestoreTasks.filter(item => item.status === 'history'))
      setTrashTasks(t => firestoreTasks.filter(item => item.status === 'trash'))

      setCurrentTab(c => firestoreTasks.filter(item => item.status === currentTabName))
    }, [firestoreTasks])

  useEffect(() => {
    setIcon(taskInfo)
  },[taskInfo.category])

  const TaskContextValues = {

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

    modalType,
    setModalType,
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
