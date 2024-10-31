import React, { useContext, useEffect } from 'react'

import { TaskContext } from '../context/TaskContext.jsx';
import  { useFirestoreFetch } from './Firestore/useFirestoreFetch.js'
import { formatDate, formatInputDate } from '../helpers/dateHelpers.js'

export const useForm = () => {

    const { taskInfo, setTaskInfo, setCurrentID, currentID } = useContext( TaskContext )
    const { fetchData } = useFirestoreFetch()

    const handleInputChange = (e, field) => {
            setTaskInfo(t => ({...t, [field]:e.target.value}))
    }

    const handleInputReset = () => {
        setTaskInfo(t => ({
            id: '',
            category: 'home',
            categoryIcon: 'fa-solid fa-home',
            description: '',
            dateAdded: formatInputDate(new Date()),
            dateDue: formatInputDate(new Date()),
            priority: 'low',
            status: 'current',
        }))

        
    }

    return { handleInputChange, handleInputReset }
}