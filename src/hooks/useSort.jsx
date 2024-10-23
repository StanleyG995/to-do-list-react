import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';

export const useSort = () => {
    const { currentTab, setCurrentTab, ascending, setAscending, currentSort, setCurrentSort } = useContext( TaskContext )

    const sortState = ( sortingFunction, type ) => {
            if (ascending === true) {
                setAscending(false)
            }
            else {
                setAscending(true)
            }   
            setCurrentTab(c => sortingFunction(c, ascending, type))
            setCurrentSort(type)
        }
        
    return { currentTab, sortState }
}