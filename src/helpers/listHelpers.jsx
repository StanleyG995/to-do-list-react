import React, { useEffect, useContext } from 'react'

import { TaskContext } from '../context/TaskContext.jsx'

import { useFirestoreFetch } from '../hooks/Firestore/useFirestoreFetch.js'

import { sortDate } from './filterHelpers.js'
import { useSort } from '../hooks/useSort.jsx'

import ListItem from '../components/UI/ListItem/ListItem.jsx'

export const listDisplay = ( arr ) => {

    const { isModalOpen, setAscending } = useContext( TaskContext )
    const { fetchData } = useFirestoreFetch('tasks')
    const { sortState } = useSort()

    useEffect(() =>  {
        fetchData()
        console.log('test')
        setAscending(false)
        sortState( sortDate, 'dateAdded')
      }, [isModalOpen])

    return arr.length ? arr.map (item => (
            <ListItem
            key={item.id}
            category={item.category}
            categoryIcon={item.categoryIcon}
            description={item.description}
            dateAdded={item.dateAdded}
            dateDue={item.dateDue}
            priority={item.priority}/>
    )) : <p className='list-empty-message'><i className="fa-solid fa-list"></i>No tasks.</p>
}
