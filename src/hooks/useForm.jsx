import React, { useContext } from 'react'

import { TaskContext } from '../context/TaskContext.jsx';

import { formatInputDate } from '../helpers/dateHelpers.js'
import { useGetId } from './useGetId.jsx'

import { useFirestoreUpload } from './Firestore/useFirestoreUpload.js'
import { useFirestoreUpdate } from './Firestore/useFirestoreUpdate.js'
import { useFirestoreRemove} from './Firestore/useFirestoreRemove.js'

export const useForm = () => {

    const { taskInfo, setTaskInfo } = useContext( TaskContext )
    const { saveData } = useFirestoreUpload('tasks')
    const { updateDocument } = useFirestoreUpdate('tasks')
    const { removeTask } = useFirestoreRemove('tasks')
    
    

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
    
    const handleSaveTask = () => {
        console.log('Task Info in save task: ', taskInfo)
        saveData({...taskInfo})
    }

    const handleUpdateTask = () => {
        updateDocument(taskInfo.id, taskInfo)
    }

    const handleRemoveTask = async (e) => {
        removeTask(taskInfo.id)
    }

    return { handleInputChange, handleInputReset, handleSaveTask, handleUpdateTask, handleRemoveTask}
}