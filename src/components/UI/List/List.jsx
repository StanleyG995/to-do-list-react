import React, { useContext } from 'react'

import { TaskContext } from '../../../context/TaskContext.jsx'

import { listDisplay } from '../../../helpers/listHelpers.jsx'

import { useSort } from '../../../hooks/useSort.jsx'
import { sortPriority, sortCategory, sortDescription, sortDate } from '../../../helpers/filterHelpers.js'

import './List.css'



const List = () => {

    const { currentTasks, setCurrentTasks } = useContext( TaskContext )
    const { sortState } = useSort()

    return (
        <div className='list'>
             <div className="list-header">
                <button className='list-heading category-heading' onClick={ () => sortState( sortCategory, 'categoryAscend') } >Category <i className="fa-solid fa-caret-up list-heading-caret"></i></button>
                <button className='list-heading description-heading' onClick={ () => sortState( sortDescription, 'descriptionAscend') } >Description <i className="fa-solid fa-caret-up list-heading-caret"></i></button>
                <button className='list-heading date-added-heading' onClick={ () => sortState( sortDate, 'descriptionAscend', dateAdded) } > Added <i className="fa-solid fa-caret-up list-heading-caret"></i></button>
                <button className='list-heading date-due-heading' onClick={ () => sortState( sortDate, 'descriptionAscend') } >Due <i className="fa-solid fa-caret-up list-heading-caret"></i></button>
                <button className='list-heading priority-heading' onClick={ () => sortState( sortPriority, 'priorityAscend') } > Priority <i className="fa-solid fa-caret-up list-heading-caret"></i></button>
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