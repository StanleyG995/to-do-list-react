import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';

export const useNavigation = () => {
    const { currentTasks, setCurrentTasks, ascending, setAscending, currentSort, setCurrentSort } = useContext( TaskContext )

    const changeTab ( tab ) => {
            
        }

    return { currentTasks, sortState }
}