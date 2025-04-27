import { initializeApp } from '@firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from '@firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native'; // to detect the platform

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOBXrspB_4Pv99CQdzKHUcRUBIPyTRKls",
  authDomain: "dswt-sharable-auth.firebaseapp.com",
  projectId: "dswt-sharable-auth",
  storageBucket: "dswt-sharable-auth.firebasestorage.app",
  messagingSenderId: "651880013484",
  appId: "1:651880013484:web:ca56e6092997889a074909",
  measurementId: "G-KG0MRF2LMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence based on platform
let auth;

if (Platform.OS === 'web') {
  // For web, just use the default persistence (localStorage)
  auth = getAuth(app);
} else {
  // For React Native, use AsyncStorage for persistence
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { app, auth };
