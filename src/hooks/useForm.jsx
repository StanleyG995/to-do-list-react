import React, { useContext } from 'react'

import { TaskContext } from '../context/TaskContext.jsx';

export const useForm = () => {

    const { setTaskInfo } = useContext( TaskContext )

    const handleInputChange = (e, field) => {
        setTaskInfo(t => ({...t, [field]:e.target.value}))
    }

    return { handleInputChange }
}