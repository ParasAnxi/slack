import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAuErJtKLLujwApdTyrgYhnuA72CZRwd2U",
  authDomain: "slack-55550.firebaseapp.com",
  projectId: "slack-55550",
  storageBucket: "slack-55550.appspot.com",
  messagingSenderId: "248469467177",
  appId: "1:248469467177:web:5f995beeb0f0b743842c38",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db ,provider };
