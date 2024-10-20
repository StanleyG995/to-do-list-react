import React, { useContext } from 'react'

import { TaskContext } from '../../../context/TaskContext.jsx'

import { listDisplay } from '../../../helpers/listHelpers.jsx'

const List = () => {

    const { currentTasks, setCurrentTasks } = useContext( TaskContext )

    return (
        <ul className='list'>
            {
                listDisplay( currentTasks )
            }
        </ul>
    )    
}

export default List