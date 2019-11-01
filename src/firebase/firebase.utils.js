import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCjEoKKYsDW52HEnVOmnJt_Qhxdmd0goW4",
  authDomain: "e-comm-db-21ac0.firebaseapp.com",
  databaseURL: "https://e-comm-db-21ac0.firebaseio.com",
  projectId: "e-comm-db-21ac0",
  storageBucket: "e-comm-db-21ac0.appspot.com",
  messagingSenderId: "855443694568",
  appId: "1:855443694568:web:e52941da43eead9ef5ba5d",
  measurementId: "G-L69LVLNPNV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firesotre = firebase.firestore();

// Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
