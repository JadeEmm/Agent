import {
    getApps,
    initializeApp
} from 'firebase/app'
import {
    getStorage, 
    ref
} from 'firebase/storage'

console.log(process.env.FIREBASE_STORAGE_BUCKET)

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyBIXBzqspniH4x2Pxxt9k1TsGfPyhtYYZ0",
    authDomain: "agent-af6de.firebaseapp.com",
    projectId: "agent-af6de",
    storageBucket: "agent-af6de.appspot.com",
    messagingSenderId: "517194535593",
    appId: "1:517194535593:web:167c07c2d121b9319a4fb8",
    measurementId: "G-EKZEQSJV04"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const storage = getStorage(app)

const imagesRef = ref(storage, 'images')
const filesRef = ref(storage, 'files')

export const storageImageRef = (token : string) => ref(imagesRef, token);
export const storageFileRef = (token : string) => ref(filesRef, token);

