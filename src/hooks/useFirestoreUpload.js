import { useState } from 'react'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig.js'

export const useFirestoreUpload = (collectionName) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const saveData = async (data) => {
        setLoading(true)
        try {
            // Dodanie dokumentu do kolekcji i pobranie referencji
            const docRef = await addDoc(collection(db, collectionName), data)
            console.log('Document written with ID: ', docRef.id)

            // Zaktualizowanie obiektu data, aby zawierał id
            const dataWithId = { ...data, id: docRef.id }

            // Możesz zapisać zaktualizowany obiekt z id
            await setDoc(docRef, dataWithId) // Aktualizacja dokumentu z nowym id

            console.log(`data: ${JSON.stringify(dataWithId)}`) // Wypisuje zawartość obiektu dataWithId
            setError(null); // resetuje ewentualny poprzedni błąd
        } catch (err) {
            console.error('Error adding document: ', err)
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    return { saveData, loading, error }
}

