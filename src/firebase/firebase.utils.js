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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("Error creating user", error.message)
    }
  }
  
  return userRef;

  
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase