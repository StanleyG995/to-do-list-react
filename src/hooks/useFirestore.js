import React, { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebaseConfig.js'

export const useFirestore = (collectionName) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(l => true)
        try {
            const querySnapshot = await getDocs(collection(db, collectionName))
            const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setData(d => fetchedData)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(l => false)
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [collectionName])

    return { data, loading, error, fetchData }
}
