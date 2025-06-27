// import Constants from 'expo-constants';
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";
// import { Platform } from "react-native"; // to detect the platform

// const isExpoGo = Constants.executionEnvironment === 'storeClient';
// const isDevClient = Constants.executionEnvironment === 'developmentClient';
// const isStandalone = Constants.executionEnvironment === 'standalone';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDY_5PQ8BppsTf_I2vqMoDRyq3CMZKUE7U",
//     authDomain: "minsapoint.firebaseapp.com",
//     projectId: "minsapoint",
//     storageBucket: "minsapoint.firebasestorage.app",
//     messagingSenderId: "456076951299",
//     appId: "1:456076951299:web:5c1fd042ef230daa4c3336",
//     measurementId: "G-XXSDMFK9RT",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// console.log("hello", app);

// // Initialize Firebase Auth with persistence based on platform
// let auth;
// if(isExpoGo) console.log("Running with Expo Go");

// if (Platform.OS === "web" || isExpoGo) {
//     // For web, just use the default persistence (localStorage)
//     auth = getAuth(app);
// }
// // else {
// //     auth = initializeAuth(app, {
// //         persistence: getReactNativePersistence(AsyncStorage),
// //     });
// // }
// console.log("Auth initialized: ", !!auth);

// export { app, auth };
