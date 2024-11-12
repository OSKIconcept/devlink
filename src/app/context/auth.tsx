"use client";

import React from "react";

import { onAuthStateChanged, User } from "firebase/auth";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase";

type TContext = {
  currentUser: User | null;
  isLoading: boolean;
};

export const AuthContext = createContext<TContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, SetCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        SetCurrentUser(authUser);
      } else {
        SetCurrentUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
