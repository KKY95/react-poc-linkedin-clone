import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC83SRBcM-1orbwpnEea1UJGxI_mKfYF9w",
    authDomain: "linkedin-clone-c306f.firebaseapp.com",
    projectId: "linkedin-clone-c306f",
    storageBucket: "linkedin-clone-c306f.appspot.com",
    messagingSenderId: "1066939480381",
    appId: "1:1066939480381:web:a14f2b7ba263ff84f6ed54"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth=firebase.auth()

export {db, auth}