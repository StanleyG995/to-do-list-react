import React, { useContext, useEffect } from 'react'

import { TaskContext } from '../context/TaskContext.jsx';

export const useForm = () => {

    const { taskInfo, setTaskInfo } = useContext( TaskContext )

    const handleInputChange = (e, field) => {
        setTaskInfo(t => ({...t, [field]:e.target.value}))
    }

    useEffect(() => {
        console.log(taskInfo)
    },[taskInfo])

    return { handleInputChange }
}