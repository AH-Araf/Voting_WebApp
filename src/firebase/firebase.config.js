import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKS1rkbmWZD_iN1MJ0-yrJ3qv5DHkYZcc",
  authDomain: "votekoren.firebaseapp.com",
  projectId: "votekoren",
  storageBucket: "votekoren.appspot.com",
  messagingSenderId: "954271290762",
  appId: "1:954271290762:web:27d6e6a9d8d5e95e116473"
};

const app = initializeApp(firebaseConfig);

export default app;