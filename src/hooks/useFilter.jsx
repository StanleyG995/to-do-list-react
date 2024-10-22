import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';
import { sortPriority } from '../helpers/filterHelpers.js'

export const useFilter = () => {
    const { currentTasks, setCurrentTasks } = useContext( TaskContext )

    const sortPriorityState = () => {
        setCurrentTasks(c => sortPriority(c))
    }

    return { currentTasks, sortPriorityState }
}