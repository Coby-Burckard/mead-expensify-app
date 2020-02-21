import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBGmNN9E5m1WY5ZEhmJ0mFLkL6q8vO6Zms",
    authDomain: "expensify-app-mead.firebaseapp.com",
    databaseURL: "https://expensify-app-mead.firebaseio.com",
    projectId: "expensify-app-mead",
    storageBucket: "expensify-app-mead.appspot.com",
    messagingSenderId: "586879417416",
    appId: "1:586879417416:web:753590213a746c034bac7d",
    measurementId: "G-06FHE4V82H"
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database()

export { firebase, database as default } 