"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2kjwnuSpQz_lgH20ZejkCstxJGKBSbqI",
  authDomain: "next-fire-app-d17c1.firebaseapp.com",
  projectId: "next-fire-app-d17c1",
  storageBucket: "next-fire-app-d17c1.firebasestorage.app",
  messagingSenderId: "106979251721",
  appId: "1:106979251721:web:9de128d7a02dbdcceccad8"
};

// Use automatic initialization
// https://firebase.google.com/docs/app-hosting/firebase-sdks#initialize-with-no-arguments
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
