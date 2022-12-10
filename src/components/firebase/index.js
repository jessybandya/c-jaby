import firebase from 'firebase';
// import { ENV } from '../../env';
const config = {
  apiKey: "AIzaSyDRgBNJymm2f-uuFZ0jnl---VmONWVZPMI",

  authDomain: "get-ejab.firebaseapp.com",

  projectId: "get-ejab",

  storageBucket: "get-ejab.appspot.com",

  messagingSenderId: "769040598918",

  appId: "1:769040598918:web:90177458510c0b1f074e07",

  measurementId: "G-4LGQY4WXYF"

};

firebase.initializeApp(config);

export default firebase;
const provider = new firebase.auth.GoogleAuthProvider();

  const auth1 = firebase.auth();
   const db = firebase.firestore();
   const storage = firebase.storage();
  // export default {auth, db, storage};
  export  {db};
  export  {auth1};
  export  {storage, provider};


firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()








