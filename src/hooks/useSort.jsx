import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';

export const useSort = () => {
    const { currentTasks, setCurrentTasks, ascending, setAscending } = useContext( TaskContext )

    const sortState = ( sortingFunction, sort ) => {
            if (ascending === true) {
                setAscending(false)
            }
            else {
                setAscending(true)
            }   
            setCurrentTasks(c => sortingFunction(c, ascending))
            console.log(ascending)
        }

    return { currentTasks, sortState }
}