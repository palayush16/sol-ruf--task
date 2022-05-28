import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

    apiKey: "AIzaSyBFAQPp9L2oPPwcvWwhArFkmxp5HmJgTD4",
    authDomain: "solruf-auth.firebaseapp.com",
    projectId: "solruf-auth",
    storageBucket: "solruf-auth.appspot.com",
    messagingSenderId: "873550898277",
    appId: "1:873550898277:web:ea6c8a81d82b04a515528c"


    
}
console.log(firebaseConfig)
const app= firebase.initializeApp(firebaseConfig);

export const auth = app.auth()




export default app