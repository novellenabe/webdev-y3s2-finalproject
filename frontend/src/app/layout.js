"use client";
import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";
import { useRouter } from "next/router";
import {
  ForwardScreenProvider,
  usePopup,
  current,
} from "../components/ForwardScreenProvider";
import { UserAuthProvider } from "@/components/UserAuthProvider";
import "./globals.css";

import AuthPopUp from "@/components/AuthPopUp";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserAuthProvider>
          <ForwardScreenProvider>
            {children}
            <AuthPopUp />
          </ForwardScreenProvider>
        </UserAuthProvider>
      </body>
    </html>
  );
}
