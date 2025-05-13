"use client";

import React, { use, useState } from "react";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
//import ForwardScreenProvider from "../components/ForwardScreenProvider.js";
import { usePopup } from "./ForwardScreenProvider";
import { useUserAuth } from "./UserAuthProvider";
import LoggedInUserOptionsDropdown from "./HeaderDropdown/LoggedInUserOptionsDropdown";

export default function Header() {
  const {
    showPopup,
    setCurrent,
    isPopupVisible,
    setIsPopupVisible,
    popupRef,
    profileDropdown,
    setProfileDropdown,
  } = usePopup();
  const { isLoggedIn, setIsLoggedIn, logout } = useUserAuth();

  const user_SIGNIN_DESKTOP = () => {
    showPopup();
  };

  const user_LOGGEDIN_DESKTOP = () => {
    setProfileDropdown(true);
  };

  const user_LOGGEDIN_MOBILE = () => {
    //setCurrent("Select");
    isLoggedIn
      ? setCurrent("LoggedInUserOptionsDropdown")
      : setCurrent("Select");
    showPopup();
  };

  return (
    <header className="bg-white fixed top-0 w-full z-10">
      <div className="flex justify-between px-7 h-15 items-center">
        <div className="flex justify-center block md:hidden">
          <button className="" id="">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.144"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#78706a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </g>
            </svg>
          </button>
        </div>
        <div className="flex text-center gap-10">
          <span className="text-2xl inline-block text-blue-500 font-bold">
            Culinary Compass
          </span>
        </div>
        <div className="flex justify-center block md:hidden">
          {!isLoggedIn ? (
            <button onClick={user_LOGGEDIN_MOBILE}>
              <svg
                height="30px"
                weight="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          ) : (
            <button
              onClick={user_LOGGEDIN_MOBILE}
              className="flex justify-center items-center"
            >
              <img
                src="default-pfp.jpeg"
                alt="default-pfp"
                className="block rounded-full h-12"
              />
            </button>
          )}
        </div>
        <div className="flex gap-5 hidden md:block">
          {!isLoggedIn ? (
            <button
              onClick={user_SIGNIN_DESKTOP}
              className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition delay-50 rounded-4xl"
            >
              Sign in
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={user_LOGGEDIN_DESKTOP}
                className="flex justify-center items-center"
              >
                <img
                  src="default-pfp.jpeg"
                  alt="default-pfp"
                  className="block rounded-full h-12"
                />
              </button>
              {profileDropdown && <LoggedInUserOptionsDropdown />}
            </div>
          )}
        </div>
      </div>
      <hr className="border-slate-200" />
    </header>
  );
}
