const admin = require('firebase-admin');
const serviceAccount = require('./path/to/your/serviceAccountKey.json'); // Zmień na ścieżkę do swojego klucza

// Inicjalizuj Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL, // Upewnij się, że masz tę zmienną w .env
});

const firestore = admin.firestore();
const data = [
    {
        id: 1,
        category: 'Home',
        categoryIcon: 'fa-solid fa-house',
        description: 'Walk the dog',
        dateAdded: '21.10.2024',
        dateDue: '24.10.2024',
        priority: 'medium',
        status: 'current',
    },
    {
        id: 2,
        category: 'Work',
        categoryIcon: 'fa-solid fa-briefcase',
        description: 'Prepare presentation for Monday',
        dateAdded: '22.10.2024',
        dateDue: '23.10.2024',
        priority: 'high',
        status: 'trash',
    },
    {
        id: 3,
        category: 'Home',
        categoryIcon: 'fa-solid fa-house',
        description: 'Grocery shopping',
        dateAdded: '19.10.2024',
        dateDue: '22.10.2024',
        priority: 'medium',
        status: 'history',
    },
    {
        id: 4,
        category: 'Fitness',
        categoryIcon: 'fa-solid fa-dumbbell',
        description: 'Go for a run',
        dateAdded: '21.10.2024',
        dateDue: '21.10.2024',
        priority: 'low',
        status: 'current',
    },
    {
        id: 5,
        category: 'Home',
        categoryIcon: 'fa-solid fa-house',
        description: 'Clean the kitchen',
        dateAdded: '16.10.2024',
        dateDue: '23.10.2024',
        priority: 'medium',
        status: 'trash',
    },
    {
        id: 6,
        category: 'Work',
        categoryIcon: 'fa-solid fa-briefcase',
        description: 'Reply to emails',
        dateAdded: '21.10.2024',
        dateDue: '21.10.2024',
        priority: 'low',
        status: 'history',
    },
    {
        id: 7,
        category: 'Personal',
        categoryIcon: 'fa-solid fa-user',
        description: 'Read 50 pages of a book',
        dateAdded: '15.10.2024',
        dateDue: '25.10.2024',
        priority: 'medium',
        status: 'current',
    },
    {
        id: 8,
        category: 'Home',
        categoryIcon: 'fa-solid fa-house',
        description: 'Organize the garage',
        dateAdded: '21.10.2024',
        dateDue: '28.10.2024',
        priority: 'low',
        status: 'trash',
    },
    {
        id: 9,
        category: 'Work',
        categoryIcon: 'fa-solid fa-briefcase',
        description: 'Finish the quarterly report',
        dateAdded: '26.10.2024',
        dateDue: '30.10.2024',
        priority: 'high',
        status: 'history',
    },
    {
        id: 10,
        category: 'Family',
        categoryIcon: 'fa-solid fa-users',
        description: 'Call mom',
        dateAdded: '25.10.2024',
        dateDue: '21.10.2024',
        priority: 'medium',
        status: 'current',
    },
    {
        id: 11,
        category: 'Fitness',
        categoryIcon: 'fa-solid fa-dumbbell',
        description: 'Attend yoga class',
        dateAdded: '19.10.2024',
        dateDue: '22.10.2024',
        priority: 'medium',
        status: 'trash',
    },
    {
        id: 12,
        category: 'Home',
        categoryIcon: 'fa-solid fa-house',
        description: 'Fix the leaking faucet',
        dateAdded: '21.10.2024',
        dateDue: '25.10.2024',
        priority: 'high',
        status: 'history',
    },
    {
        id: 13,
        category: 'Work',
        categoryIcon: 'fa-solid fa-briefcase',
        description: 'Schedule team meeting',
        dateAdded: '17.10.2024',
        dateDue: '24.10.2024',
        priority: 'medium',
        status: 'current',
    },
    {
        id: 14,
        category: 'Personal',
        categoryIcon: 'fa-solid fa-user',
        description: 'Plan weekend getaway',
        dateAdded: '21.10.2024',
        dateDue: '31.10.2024',
        priority: 'low',
        status: 'trash',
    },
    {
        id: 15,
        category: 'Home',
        categoryIcon: 'fa-solid fa-house',
        description: 'Wash the car',
        dateAdded: '21.10.2024',
        dateDue: '22.10.2024',
        priority: 'low',
        status: 'current',
    },
    {
        id: 16,
        category: 'Work',
        categoryIcon: 'fa-solid fa-briefcase',
        description: 'Update project timeline',
        dateAdded: '21.10.2024',
        dateDue: '25.10.2024',
        priority: 'medium',
        status: 'history',
    },
    {
        id: 17,
        category: 'Family',
        categoryIcon: 'fa-solid fa-users',
        description: 'Plan family dinner',
        dateAdded: '21.10.2024',
        dateDue: '27.10.2024',
        priority: 'medium',
        status: 'trash',
    },
    {
        id: 18,
        category: 'Fitness',
        categoryIcon: 'fa-solid fa-dumbbell',
        description: 'Do a home workout',
        dateAdded: '21.10.2024',
        dateDue: '21.10.2024',
        priority: 'low',
        status: 'current',
    },
    {
        id: 19,
        category: 'Personal',
        categoryIcon: 'fa-solid fa-user',
        description: 'Meditate for 10 minutes',
        dateAdded: '21.10.2024',
        dateDue: '21.10.2024',
        priority: 'low',
        status: 'history',
    },
    {
        id: 20,
        category: 'Home',
        categoryIcon: 'fa-solid fa-house',
        description: 'Prepare lunch for tomorrow',
        dateAdded: '21.10.2024',
        dateDue: '21.10.2024',
        priority: 'medium',
        status: 'trash',
    },
    {
        id: 21,
        category: 'Work',
        categoryIcon: 'fa-solid fa-briefcase',
        description: 'Draft project proposal',
        dateAdded: '22.10.2024',
        dateDue: '29.10.2024',
        priority: 'high',
        status: 'current',
    },
    {
        id: 22,
        category: 'Home',
        categoryIcon: 'fa-solid fa-house',
        description: 'Sort the mail',
        dateAdded: '22.10.2024',
        dateDue: '25.10.2024',
        priority: 'medium',
        status: 'trash',
    },
    {
        id: 23,
        category: 'Fitness',
        categoryIcon: 'fa-solid fa-dumbbell',
        description: 'Complete a 5k run',
        dateAdded: '23.10.2024',
        dateDue: '30.10.2024',
        priority: 'medium',
        status: 'history',
    },
    {
        id: 24,
        category: 'Personal',
        categoryIcon: 'fa-solid fa-user',
        description: 'Practice guitar for an hour',
        dateAdded: '21.10.2024',
        dateDue: '24.10.2024',
        priority: 'medium',
        status: 'current',
    },
    {
        id: 25,
        category: 'Work',
        categoryIcon: 'fa-solid fa-briefcase',
        description: 'Prepare for team presentation',
        dateAdded: '22.10.2024',
        dateDue: '25.10.2024',
        priority: 'high',
        status: 'trash',
    },
    {
        id: 26,
        category: 'Family',
        categoryIcon: 'fa-solid fa-users',
        description: 'Plan a family outing',
        dateAdded: '23.10.2024',
        dateDue: '27.10.2024',
        priority: 'medium',
        status: 'history',
    },
    {
        id: 27,
        category: 'Home',
        categoryIcon: 'fa-solid fa-house',
        description: 'Change air filters',
        dateAdded: '24.10.2024',
        dateDue: '30.10.2024',
        priority: 'low',
        status: 'current',
    },
    {
        id: 28,
        category: 'Fitness',
        categoryIcon: 'fa-solid fa-dumbbell',
        description: 'Attend a fitness class',
        dateAdded: '25.10.2024',
        dateDue: '26.10.2024',
        priority: 'high',
        status: 'trash',
    },
    {
        id: 29,
        category: 'Work',
        categoryIcon: 'fa-solid fa-briefcase',
        description: 'Analyze quarterly sales',
        dateAdded: '21.10.2024',
        dateDue: '30.10.2024',
        priority: 'high',
        status: 'history',
    },
    {
        id: 30,
        category: 'Personal',
        categoryIcon: 'fa-solid fa-user',
        description: 'Watch a documentary',
        dateAdded: '21.10.2024',
        dateDue: '22.10.2024',
        priority: 'low',
        status: 'current',
    },
];

const importData = async () => {
  const batch = firestore.batch();
  data.forEach(task => {
    const docRef = firestore.collection('tasks').doc(task.id.toString()); // Możesz użyć task.id jako ID dokumentu
    batch.set(docRef, task);
  });

  await batch.commit();
  console.log('Dane zostały zaimportowane!');
};

importData().catch(console.error);