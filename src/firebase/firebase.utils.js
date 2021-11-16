import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyBImCk7qcwh4l3LH7hkgTtuBbLydIgqFkk",
  
    authDomain: "crwn-db-874c0.firebaseapp.com",
  
    projectId: "crwn-db-874c0",
  
    storageBucket: "crwn-db-874c0.appspot.com",
  
    messagingSenderId: "239496432186",
  
    appId: "1:239496432186:web:02d182195aaa4cea58c303"
  
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase