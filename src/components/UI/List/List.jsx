import React, { useContext } from 'react'

import { TaskContext } from '../../../context/TaskContext.jsx'

import { listDisplay } from '../../../helpers/listHelpers.jsx'

import './List.css'

const List = () => {

    const { currentTasks, setCurrentTasks } = useContext( TaskContext )

    return (
        <div className='list'>
             <div className="list-header">
                <button className='list-heading category-heading'>Category <i class="fa-solid fa-chevron-up list-heading-chevron"></i></button>
                <button className='list-heading description-heading'>Description <i class="fa-solid fa-chevron-up list-heading-chevron"></i></button>
                <button className='list-heading date-added-heading'> Added <i class="fa-solid fa-chevron-up list-heading-chevron"></i></button>
                <button className='list-heading date-due-heading'>Due <i class="fa-solid fa-chevron-up list-heading-chevron"></i></button>
                <button className='list-heading priority-heading'>Priority <i class="fa-solid fa-chevron-up list-heading-chevron"></i></button>
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