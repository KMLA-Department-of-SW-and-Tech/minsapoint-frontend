// import { EXPO_CLIENT_ID, EXPO_CLIENT_SECRET } from "@env";

/* Need to make new key for deploy code exposed in github */
const googleLoginConfig = {
    expo: {
        client_id: process.env.EXPO_CLIENT_ID,
        project_id: "minsapoint",
        auth_uri:"https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        redirect_uris: [ "https://auth.expo.io/yoochani314/minsapoint-frontend" ],
        client_secret: process.env.EXPO_CLIENT_SECRET
    }
};

export { googleLoginConfig };

