import React, { useContext } from 'react'

import { TaskContext } from '../context/TaskContext.jsx'

import { getTaskId } from '../helpers/taskOperationsHelpers.js'

import { useFirestoreFetchDocument } from './Firestore/useFirestoreFetchDocument.js'

export const useList = () => {

    const { taskInfo, setTaskInfo } = useContext( TaskContext )
    const { fetchDocument } = useFirestoreFetchDocument('tasks')

    const handleEditTask = async (e) => {
        const taskId = getTaskId(e)
        const editedTask = await fetchDocument(taskId)
        
        if (editedTask) {
            setTaskInfo(t => ({ ...t, ...editedTask }));
        } else {
            console.error("Nie udało się pobrać edytowanego zadania.");
        }
    
    }

    return { handleEditTask }
}

