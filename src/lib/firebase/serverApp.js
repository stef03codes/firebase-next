import "server-only";

import { cookies } from "next/headers";
import { initializeServerApp, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2kjwnuSpQz_lgH20ZejkCstxJGKBSbqI",
  authDomain: "next-fire-app-d17c1.firebaseapp.com",
  projectId: "next-fire-app-d17c1",
  storageBucket: "next-fire-app-d17c1.firebasestorage.app",
  messagingSenderId: "106979251721",
  appId: "1:106979251721:web:9de128d7a02dbdcceccad8"
};

export async function getAuthenticatedAppForUser() {
  const authIdToken = (await cookies()).get("__session")?.value;

  const firebaseServerApp = initializeServerApp(
    initializeApp(firebaseConfig),
    {
      authIdToken,
    }
  );

  const auth = getAuth(firebaseServerApp);
  await auth.authStateReady();

  return { firebaseServerApp, currentUser: auth.currentUser };
}