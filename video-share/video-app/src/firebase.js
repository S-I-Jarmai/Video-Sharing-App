import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyCgEwoKW3VEFJFUC-1qhAmTqokqCU_70o4",
  authDomain: "video-74a0e.firebaseapp.com",
  projectId: "video-74a0e",
  storageBucket: "video-74a0e.appspot.com",
  messagingSenderId: "386106090325",
  appId: "1:386106090325:web:12703631ed4a0a91d345dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;