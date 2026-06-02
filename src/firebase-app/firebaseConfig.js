import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDmacqIiu8FjwMObqOHB1J5xjRJofY9E3Q',
  authDomain: 'nft-app-adead.firebaseapp.com',
  projectId: 'nft-app-adead',
  storageBucket: 'nft-app-adead.appspot.com',
  messagingSenderId: '383603343852',
  appId: '1:383603343852:web:cb865dde50d58e115000c9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
