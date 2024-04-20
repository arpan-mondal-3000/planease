import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBWNFOXgvbUu2FbsfS-R2zfbpbJRx_z70",
  authDomain: "planease-c6585.firebaseapp.com",
  projectId: "planease-c6585",
  storageBucket: "planease-c6585.appspot.com",
  messagingSenderId: "142671005060",
  appId: "1:142671005060:web:8645a14b560237677f49d1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
