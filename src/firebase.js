import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6OQ3MyHz6k50htIrcTbYuDuOC9CGYnMw",
    authDomain: "facebook-clone-e22cf.firebaseapp.com",
    databaseURL: "https://facebook-clone-e22cf.firebaseio.com",
    projectId: "facebook-clone-e22cf",
    storageBucket: "facebook-clone-e22cf.appspot.com",
    messagingSenderId: "74223044272",
    appId: "1:74223044272:web:c0f0b534df8edf11881d75",
    measurementId: "G-LFNTTLVSTN"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider };
  export default db;
