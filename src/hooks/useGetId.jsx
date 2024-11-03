import React, { useContext } from 'react'
import { useFirestoreFetchDocument } from './Firestore/useFirestoreFetchDocument.js'

import { TaskContext } from '../context/TaskContext.jsx'

export const useGetId = () => {

    const { taskInfo, setTaskInfo } = useContext( TaskContext )
    const { fetchDocument } = useFirestoreFetchDocument('tasks')
    
    const getTaskId = async (e) => {
        const fetchedTaskId = e.target.closest('li').getAttribute('id')
        const fetchedTask = await fetchDocument(fetchedTaskId)
            if (fetchedTask) {
                setTaskInfo(t => ({ ...t, ...fetchedTask }));
            } else {
                console.error("Nie udało się pobrać edytowanego zadania.");
            }
    }

    return { getTaskId }
}



