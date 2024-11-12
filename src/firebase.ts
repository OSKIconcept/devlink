import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJAVszWy-CEk_lYAPP68zjI3dKQUXmFDU",
  authDomain: "my-devlink.firebaseapp.com",
  databaseURL: "https://my-devlink-default-rtdb.firebaseio.com",
  projectId: "my-devlink",
  storageBucket: "my-devlink.appspot.com",
  messagingSenderId: "1085388708565",
  appId: "1:1085388708565:web:f2c976d244600fc510e05c",
};

import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const reg = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (response) => updateProfile(response.user, { displayName: email })
  );
};
0;

export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return auth.signOut();
};

export const db = getFirestore(app);

const imgDB = getStorage(app);
const txtDB = getFirestore(app);

export { imgDB, txtDB };

export default app;
