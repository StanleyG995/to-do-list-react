import React, { useContext } from 'react'

import { TaskContext } from '../context/TaskContext.jsx';
import { formatDate, formatInputDate } from '../helpers/dateHelpers.js'

export const useForm = () => {

    const { taskInfo, setTaskInfo } = useContext( TaskContext )

    console.log('Task info in modal comp: ', taskInfo)

    const handleInputChange = (e, field) => {
        setTaskInfo(t => ({...t, [field]:e.target.value}))
    }

    const handleInputReset = () => {
        setTaskInfo(t => ({
            id: '',
            category: 'dupsko',
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