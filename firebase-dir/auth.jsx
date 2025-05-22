import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
// import axiosPrivate from "../hooks/axiosPrivate";
import { auth } from "./firebase";
import { useEffect } from 'react';
import { Button } from '@gluestack-ui/themed';
import { Platform } from 'react-native';

// only for dev, the client_secret should be placed in environment variables
import { expo, web } from "@/dev/google-client/google_client_secret.json";

const syncFirebaseWithMongoose = async (credential) => {
  try {
    // const result = await axiosPrivate.post(
    //   "/api/user/sync",
    //   {},
    //   credential.user.accessToken
    // );
    // return result;
  } catch (e) {
    console.error("Sync firebase with mongoose error: ", e);
    throw e;
  }
};

export function UserLoginButton({ style, children }) {
  // logic problem needs bugfix

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: expo.client_id,
    // iosClientId: 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com',
    // androidClientId: 'YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com',
    webClientId: web.client_id,
  });

  // PROBLEM
  // Function to handle sign-in and token exchange
  const signInWithPopupInWebAndSyncDB = () => {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${web.client_id}&redirect_uri=${encodeURIComponent("http://localhost:8081/")}`;
    
    const popupWindow = window.open(url, 'GoogleAuth', 'width=600,height=600');

    // Handle window closing and successful login
    popupWindow.addEventListener('load', async () => {
      const urlParams = new URLSearchParams(popupWindow.location.hash.substring(1));
      const idToken = urlParams.get('id_token');
      // const provider = new GoogleAuthProvider();
      // provider.setCustomParameters({
      //   prompt: "select_account", // This forces the account selection account every time
      // });
      if (idToken) {
        const firebaseResult = await signInWithCredential(auth, GoogleAuthProvider().credential(idToken));
        console.log('Firebase sign-in result: ', firebaseResult);
        // Continue   your app flow

        // check whether user exists and create account if not
        // if (result) await syncFirebaseWithMongoose(result);
        // check admin
        // const userInfo = await axiosPrivate.get(
        //   "/api/user",
        //   result.user.accessToken
        // );
      } else {
        console.error("Failed to retrieve ID token from the popup.");
      }
      popupWindow.close();
    });
  };
  const signInWithPopupInNonWebAndSyncDB = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account", // This forces the account selection account every time
    });

    // Step 1: Get the Google user's ID token
    const { id_token } = response.params;

    // Step 2: Create a Firebase credential with the ID token
    const googleCredential = provider.credential(id_token);

    // Step 3: Sign in with Firebase using the credential
    const firebaseResult = await signInWithCredential(auth, googleCredential);
    console.log("Firebase result: ", firebaseResult);

    // check whether user exists and create account if not
    // if (result) await syncFirebaseWithMongoose(result);
    // check admin
    // const userInfo = await axiosPrivate.get(
    //   "/api/user",
    //   result.user.accessToken
    // );

  }
  const signInAndSyncDB = () => {
    if (Platform.OS === 'web') {
      signInWithPopupInWebAndSyncDB();
    } else {
      signInWithPopupInNonWebAndSyncDB();
    }
  }

  useEffect(() => {
    if (response?.type === 'success'){
      signInAndSyncDB();
    }
  }, [response]);

  return (
    <Button
      style={style}
      disabled={!request}
      title="Sign in with Google"
      onPress={() => {
        promptAsync(); // sends request to Google to be ready to sign in, setting response to true if finished
      }}
    >
      {children}
    </Button>
  );
};

export const signUserOut = async (accessToken) => {
  try {
    if (accessToken) {
      await auth.signOut();
      console.log('Revoking token:', accessToken)
      await AuthSession.revokeAsync(
        { token: accessToken },
        { revocationEndpoint: 'https://oauth2.googleapis.com/revoke' }
      );
    } else {
      throw new Error("No access token provided");
    }
  } catch(e) {
    console.error("Failed to log out: ", e);
  }
};