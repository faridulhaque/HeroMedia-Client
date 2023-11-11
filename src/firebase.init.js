import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7DjansFiS1pyY70sZ_iS0IjfxKlEDD7k",
  authDomain: "heromedia-59b2a.firebaseapp.com",
  projectId: "heromedia-59b2a",
  storageBucket: "heromedia-59b2a.appspot.com",
  messagingSenderId: "870571687208",
  appId: "1:870571687208:web:4329e1685efc39588b641d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;