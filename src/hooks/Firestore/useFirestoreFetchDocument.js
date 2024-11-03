import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../../firebaseConfig.js'

export const useFirestoreFetchDocument = (collectionName) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchDocument = async (documentId) => {
        setLoading(true)
        setError(null)

        try {
            const docRef = doc(db, collectionName, documentId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setData(docSnap.data())
                return docSnap.data()
            } else {
                setError("Dokument nie istnieje.")
                return null
            }
        } catch (err) {
            setError("Błąd pobierania dokumentu.")
            return null
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, error, fetchDocument }
}