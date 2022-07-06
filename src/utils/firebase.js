// import { getFirestore } from '@firebase/firestore';
// import { initializeApp } from 'firebase/app';
// import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAMIDkaoRuOq7zAhAvX7pcREO1qPeo7AGk',
//   authDomain: 'whatsapp-85648.firebaseapp.com',
//   projectId: 'whatsapp-85648',
//   storageBucket: 'whatsapp-85648.appspot.com',
//   messagingSenderId: '1064013475495',
//   appId: '1:1064013475495:web:13a312eed1cfed5a023582',
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();

// export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

// export const logout = () => signOut(auth);

// export const db = getFirestore();

import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAMIDkaoRuOq7zAhAvX7pcREO1qPeo7AGk',
  authDomain: 'whatsapp-85648.firebaseapp.com',
  projectId: 'whatsapp-85648',
  storageBucket: 'whatsapp-85648.appspot.com',
  messagingSenderId: '1064013475495',
  appId: '1:1064013475495:web:13a312eed1cfed5a023582',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
