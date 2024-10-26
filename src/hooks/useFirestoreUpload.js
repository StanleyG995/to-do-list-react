import { useState, useContext } from 'react'

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebaseConfig.js'

import { TaskContext } from '../context/TaskContext.jsx'

import { useModal } from '../hooks/useModal.jsx'

export const useFirestoreUpload = (collectionName) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { taskInfo } = useContext( TaskContext )

    const saveData = async (data) => {
        setLoading(true)
        try {
            const docRef = await addDoc(collection(db, collectionName), data)
            console.log('Document written with ID: ', docRef.id)
            setError(null) // resetuje ewentualny poprzedni błąd
        } catch (err) {
            console.error('Error adding document: ', err)
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    const handleSaveTask = () => {
        saveData(taskInfo)
        handleModalClose()
    }

    return { saveData, loading, error, handleSaveTask }

}

