// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCRWMWf0YHtvW90d4beLDpbC5X3zvCeTDE",
  authDomain: "d-models-e83b0.firebaseapp.com",
  projectId: "d-models-e83b0",
  storageBucket: "d-models-e83b0.firebasestorage.app",
  messagingSenderId: "795732210381",
  appId: "1:795732210381:web:31bbf4c54454a3e6c3af84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
