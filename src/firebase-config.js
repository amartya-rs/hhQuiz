import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_DATABASE_URL,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_AUTH_DOMAIN_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = ref(getDatabase());

export { auth, db };
