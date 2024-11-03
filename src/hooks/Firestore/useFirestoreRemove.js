import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig.js'


export const useFirestoreRemove = (collectionName) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const removeTask = async (id) => {
        setLoading(true)
        setError(null)

        try {
            const docRef = doc(db, collectionName, id)
            await updateDoc(docRef, {status: 'trash'})
        }

        catch(err) {
            console.error("Błąd podczas usuwania dokumentu:", err)
            setError("Nie udało się usunąć dokumentu")
          } 

        finally {
            setLoading(false)
        }
    }

    return { removeTask }
}