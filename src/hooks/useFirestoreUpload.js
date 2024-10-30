import { useState } from 'react'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig.js'

export const useFirestoreUpload = (collectionName) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const saveData = async (data) => {
        setLoading(true)
        try {
            const docRef = await addDoc(collection(db, collectionName), data)
            console.log('Document written with ID: ', docRef.id)
            const dataWithId = { ...data, id: docRef.id }

            await setDoc(docRef, dataWithId) 
            
            setError(null)
        } catch (err) {
            console.error('Error adding document: ', err)
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    return { saveData, loading, error }
}

