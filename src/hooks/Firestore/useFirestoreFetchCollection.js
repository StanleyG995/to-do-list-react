import React, { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../../firebaseConfig.js';

export const useFirestoreFetchCollection = (collectionName) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, collectionName),
            (querySnapshot) => {
                const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setData(fetchedData);
                setLoading(false);
                console.log('fetching')
            },
            (err) => {
                setError(err);
                setLoading(false);
            }
        );
        return () => unsubscribe();
    }, [collectionName]);

    return { data, loading, error };
};
