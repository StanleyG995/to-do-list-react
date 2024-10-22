import React, { useContext } from 'react'

import { TaskContext } from '../../../context/TaskContext.jsx'

import { listDisplay } from '../../../helpers/listHelpers.jsx'

import { useSort } from '../../../hooks/useSort.jsx'
import { sortPriority, sortAlphabetical, sortDate } from '../../../helpers/filterHelpers.js'

import './List.css'



const List = () => {

    const { currentTasks, setCurrentTasks, currentSort, ascending } = useContext( TaskContext )
    const { sortState } = useSort()

    return (
        <div className='list'>
             <div className="list-header">
                <button 
                    className='list-heading category-heading' 
                    onClick={ () => sortState( sortAlphabetical, 'category' )} >
                    Category <i 
                        className={`fa-solid fa-caret-up list-heading-caret 
                        ${currentSort === 'category' ? 'caret-visible' : ''} 
                        ${ascending ? 'caret-up' : 'caret-down'} `}></i></button>

                <button
                    className='list-heading description-heading' 
                    onClick={ () => sortState( sortAlphabetical, 'description' )} >
                    Description <i 
                        className={`fa-solid fa-caret-up list-heading-caret 
                        ${currentSort === 'description' ? 'caret-visible' : ''} 
                        ${ascending ? 'caret-up' : 'caret-down'} `}></i></button>

                <button 
                    className='list-heading date-added-heading' 
                    onClick={ () => sortState( sortDate, 'dateAdded') } >
                    Added <i 
                        className={`fa-solid fa-caret-up list-heading-caret
                        ${currentSort === 'dateAdded' ? 'caret-visible' : ''} 
                        ${ascending ? 'caret-up' : 'caret-down'} `}></i></button>

                <button 
                    className='list-heading date-due-heading'
                    onClick={ () => sortState( sortDate, 'dateDue') } >
                    Due <i 
                        className={`fa-solid fa-caret-up list-heading-caret
                        ${currentSort === 'dateDue' ? 'caret-visible' : ''} 
                        ${ascending ? 'caret-up' : 'caret-down'} `}></i></button>

                <button
                    className='list-heading priority-heading'
                    onClick={ () => sortState( sortPriority, 'priority') } >
                    Priority <i 
                        className={`fa-solid fa-caret-up list-heading-caret
                        ${currentSort === 'priority' ? 'caret-visible' : ''} 
                        ${ascending ? 'caret-up' : 'caret-down'} `}></i></button>
            </div>
            <ul className='list-inner'>
                {
                    listDisplay( currentTasks )
                }
            </ul>
        </div>
        
    )    
}

export default List