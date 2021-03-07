import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB7JVeMQ5mBRLIu4tRBSJFj3tcL74nMHKU",
  authDomain: "clone-b9bab.firebaseapp.com",
  projectId: "clone-b9bab",
  storageBucket: "clone-b9bab.appspot.com",
  messagingSenderId: "476889603739",
  appId: "1:476889603739:web:cd8574e668327be69cf03e",
  measurementId: "G-G5DW1T2C76"
});


const auth=firebase.auth();


export {auth};