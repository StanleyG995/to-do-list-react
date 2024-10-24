import React, { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebaseConfig.js'

const useFirestore = (collectionName) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const querySnapshot = await getDocs(collection(db, collectionName))
                const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setData(fetchedData)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [collectionName])

    return { data, loading, error }
}

export default useFirestore