import { useState, useEffect, useContext } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../../firebaseConfig.js';

import { TaskContext } from '../../context/TaskContext.jsx'

export const useFirestoreFetchDocument = (collectionName, documentId) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { taskInfo } = useContext( TaskContext )

    useEffect(() => {

        const fetchDocument = async () => {
            setLoading(true);

            try {
                const docRef = doc(db, collectionName, documentId)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    setData(docSnap.data())
                } else {
                    console.log("Nie znaleziono dokumentu.")
                    setError("Dokument nie istnieje.")
                }
            } catch (err) {
                console.error("Błąd pobierania dokumentu:", err)
                setError("Błąd pobierania dokumentu.")
            } finally {
                setLoading(false)
            }
        };

        if (documentId) {
            fetchDocument();
        }
    }, [collectionName, documentId]);

    return {data, loading, error };
};