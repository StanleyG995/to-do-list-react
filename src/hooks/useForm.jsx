import React, { useContext, useEffect } from 'react'

import { TaskContext } from '../context/TaskContext.jsx';
import  { useFirestore } from '../hooks/useFirestore.js'

export const useForm = () => {

    const { taskInfo, setTaskInfo, setCurrentID, currentID } = useContext( TaskContext )
    const { fetchData } = useFirestore()

    const handleInputChange = (e, field) => {
            setTaskInfo(t => ({...t, [field]:e.target.value}))
    }

    const handleInputReset = () => {
        setTaskInfo({
            id: currentID,
            category: 'home',
            categoryIcon: '',
            description: '',
            dateAdded: '',
            dateDue: '',
            priority: 'low',
            status: 'current',
        })

        
    }

    return { handleInputChange, handleInputReset }
}