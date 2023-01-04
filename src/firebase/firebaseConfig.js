import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage';
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyAoMGqVXWymn3FfAmqa4Avl1_Hc9koFv3s",
    authDomain: "test004-be022.firebaseapp.com",
    projectId: "test004-be022",
    storageBucket: "test004-be022.appspot.com",
    messagingSenderId: "1022180481154",
    appId: "1:1022180481154:web:b186f1663186ae879d7c9b",
    measurementId: "G-FDWFPGPQFC"
});

firebase.auth().languageCode = 'ko'

const auth = firebase.auth()
const firestore = firebase.firestore()
const functions = firebase.app().functions('asia-northeast3')

export {auth, firestore, functions, firebase}
