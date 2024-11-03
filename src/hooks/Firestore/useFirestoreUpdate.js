import { useState } from "react";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const useFirestoreUpdate = (collectionName) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const updateDocument = async (id, newData) => {
        setLoading(true)
        setError(null)

        try {
            const docRef = doc(db, collectionName, id)
            await updateDoc(docRef, newData)
        }
        
        catch(err) {
            console.log('Error updating document: ', err)
            setError(err)
        }

        finally {
            setLoading(false)
        }
    }

    return { updateDocument }
}