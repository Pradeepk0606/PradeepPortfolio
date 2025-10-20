import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
let firebaseApp: FirebaseApp;

// Check if we're in the browser
const isClient = typeof window !== 'undefined';

if (isClient) {
  // Initialize Firebase only on the client side
  firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
} else {
  // On the server, we'll use a mock object
  firebaseApp = {} as FirebaseApp;
}

// Get the auth instance
const auth = isClient ? getAuth(firebaseApp) : null;

export { firebaseApp, auth };
