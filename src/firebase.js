import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_Cs6viSHsBb7T42v68nrKCyj5oGGic-I",
    authDomain: "clone-101bb.firebaseapp.com",
    projectId: "clone-101bb",
    storageBucket: "clone-101bb.appspot.com",
    messagingSenderId: "680481041745",
    appId: "1:680481041745:web:d4e1b825206bba0abd7770",
    measurementId: "G-VTKBSF4KJ5"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, db, provider}