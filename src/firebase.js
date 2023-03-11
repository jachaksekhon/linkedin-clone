import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBgpj8XQgfElpRq7Xav_oU5POnJbURXV9k",
    authDomain: "linkedinclone-909c1.firebaseapp.com",
    projectId: "linkedinclone-909c1",
    storageBucket: "linkedinclone-909c1.appspot.com",
    messagingSenderId: "176726410652",
    appId: "1:176726410652:web:150e8148ad8cc32c29b459"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); /* this part connects our app to db */
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth } /* since we need this outside of this file we export it */