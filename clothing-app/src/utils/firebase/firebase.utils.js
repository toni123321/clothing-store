import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyBcIPDAxZXjrF0308eB1FCd322vRdZRvvc",
    authDomain: "clothing-store-db-ebd1a.firebaseapp.com",
    projectId: "clothing-store-db-ebd1a",
    storageBucket: "clothing-store-db-ebd1a.appspot.com",
    messagingSenderId: "118792568326",
    appId: "1:118792568326:web:3f88c9627e53b9c1274d87"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
  
//   
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentfromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)

    // Check if snapshot exist in the db
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch(error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}