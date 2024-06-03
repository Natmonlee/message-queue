import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9hut7dXoOmKsssboQ4THm2lmRH-il5Co",
  authDomain: "message-queue-protolyst.firebaseapp.com",
  projectId: "message-queue-protolyst",
  storageBucket: "message-queue-protolyst.appspot.com",
  messagingSenderId: "868867010149",
  appId: "1:868867010149:web:456ddbae5c4c565034e08c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
