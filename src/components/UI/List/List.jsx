import React, { useContext } from 'react'

import { TaskContext } from '../../../context/TaskContext.jsx'

import { listDisplay } from '../../../helpers/listHelpers.jsx'

import { useSort } from '../../../hooks/useSort.jsx'

import './List.css'



const List = () => {

    const { currentTasks, setCurrentTasks } = useContext( TaskContext )
    const { sortPriorityState, sortCategoryState, sortDescriptionState } = useSort()

    return (
        <div className='list'>
             <div className="list-header">
                <button className='list-heading category-heading' onClick={ () => sortCategoryState() } >Category <i className="fa-solid fa-caret-up list-heading-caret"></i></button>
                <button className='list-heading description-heading' onClick={ () => sortDescriptionState() } >Description <i className="fa-solid fa-caret-up list-heading-caret"></i></button>
                <button className='list-heading date-added-heading'> Added <i className="fa-solid fa-caret-up list-heading-caret"></i></button>
                <button className='list-heading date-due-heading'>Due <i className="fa-solid fa-caret-up list-heading-caret"></i></button>
                <button className='list-heading priority-heading' onClick={ () => sortPriorityState() } > Priority <i className="fa-solid fa-caret-up list-heading-caret"></i></button>
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