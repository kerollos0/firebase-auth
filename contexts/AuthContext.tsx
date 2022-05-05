import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/init-firbase";

const AuthContext = createContext({
  currentUser: null,
  Register: () => Promise,
  Login: () => Promise,
  Logout: () => Promise,
  SingInWithGoogle: () => Promise,
  ForgetPassword: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  function Register(email: any, password: any) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function Login(email: any, password: any) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function SingInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function ForgetPassword(email: any) {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    });
  }

  function Logout() {
    return signOut(auth);
  }

  const value = {
    currentUser,
    Register,
    Login,
    Logout,
    SingInWithGoogle,
    ForgetPassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
