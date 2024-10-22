import React, { useContext } from 'react'

import { TaskContext } from '../../../context/TaskContext.jsx'

import { listDisplay } from '../../../helpers/listHelpers.jsx'

import './List.css'

const List = () => {

    const { currentTasks, setCurrentTasks } = useContext( TaskContext )

    return (
        <div className='list'>
             <div className="list-header">
                <button className='list-heading category-heading'>Category</button>
                <button className='list-heading description-heading'>Description</button>
                <button className='list-heading date-added-heading'>Added</button>
                <button className='list-heading date-due-heading'>Due</button>
                <button className='list-heading priority-heading'>Priority</button>
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