import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {

    apiKey: "AIzaSyBm5KyGVV4B0Pl2MYsw5fXdJzMJr77IA9Q",
    authDomain: "crwn-db-d4dfe.firebaseapp.com",
    databaseURL: "https://crwn-db-d4dfe.firebaseio.com",
    projectId: "crwn-db-d4dfe",
    storageBucket: "crwn-db-d4dfe.appspot.com",
    messagingSenderId: "331111237481",
    appId: "1:331111237481:web:2a26bb5e8c488704ef1ff8",
    measurementId: "G-L333MJY4ZY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;