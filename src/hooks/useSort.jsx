import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';

export const useSort = () => {
    const { currentTasks, setCurrentTasks, ascending, setAscending, currentSort, setCurrentSort } = useContext( TaskContext )

    const sortState = ( sortingFunction, type ) => {
            if (ascending === true) {
                setAscending(false)
            }
            else {
                setAscending(true)
            }   
            setCurrentTasks(c => sortingFunction(c, ascending, type))
            setCurrentSort(type)
        }

        useEffect(() => {
            console.log(currentSort);
        }, [currentSort])

    return { currentTasks, sortState }
}