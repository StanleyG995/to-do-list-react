import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig.js'


export const useFirestoreMove = (collectionName) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const moveTask = async (id, status) => {
        setLoading(true)
        setError(null)

        try {
            const docRef = doc(db, collectionName, id)
            await updateDoc(docRef, status)
        }

        catch(err) {
            console.error("Błąd podczas usuwania dokumentu:", err)
            setError("Nie udało się usunąć dokumentu")
          } 

        finally {
            setLoading(false)
        }
    }

    return { moveTask }
}