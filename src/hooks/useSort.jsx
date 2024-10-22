import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';
import { sortPriorityAscend, sortPriorityDescend, sortCategoryAscend, sortCategoryDescend, sortDescriptionAscend, sortDescriptionDescend } from '../helpers/filterHelpers.js'

export const useSort = () => {
    const { currentTasks, setCurrentTasks, currentFilter, setCurrentFilter } = useContext( TaskContext )

    const sortPriorityState = () => {
        console.log('Sorting tasks...');
        if (currentFilter !== 'priorityAscend') {
            setCurrentTasks(c => sortPriorityAscend(c))
            setCurrentFilter('priorityAscend')
        }
        else {
            setCurrentTasks(c => sortPriorityDescend(c))
            setCurrentFilter('priorityDescend')
        }
        console.log(currentFilter)
    }

    const sortCategoryState = () => {
        console.log('Sorting tasks...');
        if (currentFilter !== 'categoryAscend') {
            setCurrentTasks(c => sortCategoryAscend(c))
            setCurrentFilter('categoryAscend')
        }
        else {
            setCurrentTasks(c => sortCategoryDescend(c))
            setCurrentFilter('categoryDescend')
        }
        console.log(currentFilter)
    }

    const sortDescriptionState = () => {
        console.log('Sorting tasks...');
        if (currentFilter !== 'descriptionAscend') {
            setCurrentTasks(c => sortDescriptionAscend(c))
            setCurrentFilter('descriptionAscend')
        }
        else {
            setCurrentTasks(c => sortDescriptionDescend(c))
            setCurrentFilter('descriptionDescend')
        }
        console.log(currentFilter)
    }


    return { currentTasks, sortPriorityState, sortCategoryState, sortDescriptionState }
}