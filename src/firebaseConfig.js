import firebase from 'firebase/app'
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGVTONhecayuigOKfMip4GMyYuSK89-RY",
  authDomain: "food-cocktail-db.firebaseapp.com",
  projectId: "food-cocktail-db",
  storageBucket: "food-cocktail-db.appspot.com",
  messagingSenderId: "976904700952",
  appId: "1:976904700952:web:8db2548c9b54ab83bdaf6d",
  measurementId: "G-CPYGRRC19E"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;