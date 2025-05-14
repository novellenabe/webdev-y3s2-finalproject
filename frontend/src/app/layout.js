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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthPopUp from "@/components/AuthPopUp";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserAuthProvider>
          <ForwardScreenProvider>
            <Header />
            {children}
            <Footer />
            <AuthPopUp />
          </ForwardScreenProvider>
        </UserAuthProvider>
      </body>
    </html>
  );
}
