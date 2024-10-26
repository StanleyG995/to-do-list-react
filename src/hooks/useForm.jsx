import React, { useContext, useEffect } from 'react'

import { TaskContext } from '../context/TaskContext.jsx';

export const useForm = () => {

    const { taskInfo, setTaskInfo } = useContext( TaskContext )

    const handleInputChange = (e, field) => {
        setTaskInfo(t => ({...t, [field]:e.target.value}))
    }

    const handleInputReset = () => {
        setTaskInfo({
            id: '',
            category: 'home',
            categoryIcon: '',
            description: '',
            dateAdded: '',
            dateDue: '',
            priority: 'low',
            status: 'current',
        })
    }

    useEffect(() => {
        console.log(taskInfo)
    },[taskInfo])

    return { handleInputChange, handleInputReset }
}