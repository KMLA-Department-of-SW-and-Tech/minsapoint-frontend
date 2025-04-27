// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential/* , signInWithPopup */ } from "@firebase/auth";
// import axiosPrivate from "../hooks/axiosPrivate";
import { auth } from "./firebase";

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

export const signUserInWithGoogle = async () => {
  // logic problem needs bugfix

  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account", // This forces the account selection account every time
    });
    // const result = await signInWithPopup(auth, provider);

    // // Step 1: Get the Google user's ID token
    // const { idToken } = await GoogleSignin.signIn();

    // // Step 2: Create a Firebase credential with the ID token
    // const googleCredential = provider.credential(idToken);

    // // Step 3: Sign in with Firebase using the credential
    // const result = await signInWithCredential(auth, googleCredential)


    // check whether user exists and create account if not
    // if (result) await syncFirebaseWithMongoose(result);
    // check admin
    // const userInfo = await axiosPrivate.get(
    //   "/api/user",
    //   result.user.accessToken
    // );
    return {
      // firebaseResult: result,
      // isAdmin: userInfo.data.userType === "Admin",
    };
  } catch (err) {
    console.error("Sign user with google error: ", err);
    throw err;
  }
};

export const signUserOut = async () => {
  try {
    await GoogleSignin.signOut();
    await auth.signOut();
  } catch(e) {
    console.error("Failed to log out: ", e);
  }
};
