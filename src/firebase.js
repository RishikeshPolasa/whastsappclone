import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC5rYWIJ8X2n1Ro9IniMOiZ-A3TYCScS6E",
  authDomain: "whatsappclone-bb7db.firebaseapp.com",
  projectId: "whatsappclone-bb7db",
  storageBucket: "whatsappclone-bb7db.appspot.com",
  messagingSenderId: "30639217433",
  appId: "1:30639217433:web:f518c381d3d219c8854388",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
