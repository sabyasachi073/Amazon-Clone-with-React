import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCV75kA0b2DuggDRv0Ikr3DPt2BDCHHvl4",
    authDomain: "clone-9ef5b.firebaseapp.com",
    projectId: "clone-9ef5b",
    storageBucket: "clone-9ef5b.appspot.com",
    messagingSenderId: "963375583285",
    appId: "1:963375583285:web:805010944cf8b7facfe17c",
    measurementId: "G-SDSRGHG3MR"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
