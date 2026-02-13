// Firebase Configuration
// IMPORTANTE: Sostituisci questi valori con la tua configurazione Firebase

const firebaseConfig = {
    apiKey: "AIzaSyCf2XwEwcKnpldMjD1D2IX7Skx5Vauqhns",
    authDomain: "bang-6d35a.firebaseapp.com",
    projectId: "bang-6d35a",
    storageBucket: "bang-6d35a.firebasestorage.app",
    messagingSenderId: "515737960541",
    appId: "1:515737960541:web:551c91c09d5cfe63c04db4"
};

// Inizializza Firebase
firebase.initializeApp(firebaseConfig);

// Inizializza servizi
const auth = firebase.auth();
const db = firebase.firestore();

// Export per uso nell'app
window.firebaseAuth = auth;
window.firebaseDB = db;
