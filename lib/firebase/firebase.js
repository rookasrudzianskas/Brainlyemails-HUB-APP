// firebase 🔥 this is all in firebase v9.0 👉
import { initializeApp, getApp, getApps } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZGD65pOn6w7XF0R5e1cELudImkUClFHI",
    authDomain: "rokas-brainlyemails.firebaseapp.com",
    projectId: "rokas-brainlyemails",
    storageBucket: "rokas-brainlyemails.appspot.com",
    messagingSenderId: "279516908167",
    appId: "1:279516908167:web:3af270a8baec4c63af0622",
    measurementId: "G-ECK3YG6GV8"
};


// initialize firebase
// if there are no apps, we initialize one, if there is, we get the first one
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// firestore initialization
const db = getFirestore();

// initialize storage
const storage = getStorage();

export { app, db, storage };
