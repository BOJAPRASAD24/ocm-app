// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:Process.env.NEXT_PUBLIC_API ,
  authDomain:process.env.NEXT_PUBLIC_AUTH_DOMAIN ,
  projectId:process.env.NEXT_PUBLIC_PROJECT_ID, 
  storageBucket:process.env.NEXT_PUBLIC_STORAGE,
  messagingSenderId:process.env.NEXT_PUBLIC_MESSAGINGSENDER,
  appId:process.env.NEXT_PUBLIC_APP_ID,
  measurementId:process.env.NEXT_PUBLIC_MEASURMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = GoogleAuthProvider();

export const signInWithGoogle = () =>signInWithPopup(auth, provider);