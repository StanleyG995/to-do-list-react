import React, { useContext } from 'react'

import { TaskContext } from '../../../context/TaskContext.jsx'

import { listDisplay } from '../../../helpers/listHelpers.jsx'

import './List.css'

const List = () => {

    const { currentTasks, setCurrentTasks } = useContext( TaskContext )

    return (
        <>
             <div className="list-header">
                <button>Category</button>
                <button>Description</button>
                <button>Added</button>
                <button>Due</button>
                <button>Priority</button>
            </div>
            <ul className='list'>
                {
                    listDisplay( currentTasks )
                }
            </ul>
        </>
        
    )    
}

export default List