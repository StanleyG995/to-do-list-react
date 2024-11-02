import React, { useContext } from 'react'

import { TaskContext } from '../context/TaskContext.jsx';
import { formatDate, formatInputDate } from '../helpers/dateHelpers.js'
import { useFirestoreUpload } from './Firestore/useFirestoreUpload.js'


export const useForm = () => {

    const { taskInfo, setTaskInfo } = useContext( TaskContext )
    const { saveData } = useFirestoreUpload('tasks')
    
    const handleInputChange = (e, field) => {
        setTaskInfo(t => ({...t, [field]:e.target.value}))
    }

    const handleInputReset = () => {
        setTaskInfo(t => ({
            id: '',
            category: 'Home',
            categoryIcon: 'fa-solid fa-home',
            description: '',
            dateAdded: formatInputDate(new Date()),
            dateDue: formatInputDate(new Date()),
            priority: 'low',
            status: 'current',
        }))
    }

    
    const handleSaveTask = async (e) => {
        e.preventDefault()
        console.log('Task Info in save task: ', taskInfo)
        saveData({...taskInfo})
        handleModalClose()
    }

    return { handleInputChange, handleInputReset, handleSaveTask }
}