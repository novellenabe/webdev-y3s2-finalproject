"use client";

import React, { useState } from "react";
import { usePopup } from "../ForwardScreenProvider";
import { useUserAuth } from "../UserAuthProvider";
import LoggedInUserOptions from "../HeaderDropdown/LoggedInUserOptionsDropdown";

export default function SignInEmail() {
  const { isPopupVisible, hidePopup, setCurrent } = usePopup();
  const { isLoggedIn, setIsLoggedIn, setCurrentActiveEmail } = useUserAuth();

  const [isLoading, setIsLoading] = useState(false); // TODO: REMOVE THIS LATER
  const [responseTrigger, setResponseTrigger] = useState(false); // TODO: REMOVE THIS LATER

  if (!isPopupVisible) {
    return null;
  }

  const SelectBack = () => {
    setCurrent("Select");
  };

  const SelectJoin = () => {
    setCurrent("SignUp");
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const data = {};
      for (const [key, value] of new FormData(event.currentTarget)) {
        if (data[key]) {
          if (!Array.isArray(data[key])) {
            data[key] = [data[key]];
          }
          data[key].push(value);
        } else {
          data[key] = value;
        }
      }
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      // TODO: Automatically Log In
      if (response.ok) {
        console.log("OK");
        setIsLoggedIn(true);
        setCurrentActiveEmail(data.email);
        hidePopup();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <button onClick={SelectBack}>
          <svg
            width="30px"
            height="30px"
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
              <rect width="24" height="24" fill="white"></rect>{" "}
              <path
                d="M14.5 17L9.5 12L14.5 7"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button onClick={hidePopup}>
          <svg
            width="30px"
            height="30px"
            viewBox="-2.4 -2.4 28.80 28.80"
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
              <rect width="24" height="24" fill="white"></rect>{" "}
              <path
                d="M7 17L16.8995 7.10051"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>{" "}
              <path
                d="M7 7.00001L16.8995 16.8995"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="w-100 flex flex-col gap-8 mx-10 mt-4">
          <h1 className="text-3xl inline-block text-blue-500 font-bold">
            Culinary Compass
          </h1>
          <span className="text-2xl inline-block font-bold">Welcome back.</span>
        </div>

        <form onSubmit={onSubmit}>
          <div className="w-100 mx-10 my-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 flex font-bold text-gray-800 text-sm"
              >
                Email address
              </label>
              <input
                className="appearance-none border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                autoComplete="off"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="mb-2 flex font-bold text-gray-800 text-sm"
              >
                Password
              </label>
              <input
                className="appearance-none border border-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <a href="#" className="font-medium underline">
              Forgot password?
            </a>
          </div>
          <div className="w-100 mx-10 flex mt-5 mb-9 md:w-auto justify-center">
            <div className="PUT MARGIN HERE">
              <button
                className="h-12 w-full bg-black text-white font-bold py-3 rounded-3xl mx-auto items-center"
                disabled={isLoading}
              >
                {!isLoading ? (
                  "Sign In"
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    height="100%"
                    width="100%"
                  >
                    <circle
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeWidth="15"
                      r="30"
                      cx="0"
                      cy="100"
                    >
                      <animate
                        attributeName="opacity"
                        calcMode="spline"
                        dur="2"
                        values="1;0;1;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="-.4"
                      ></animate>
                    </circle>
                    <circle
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeWidth="15"
                      r="30"
                      cx="120"
                      cy="100"
                    >
                      <animate
                        attributeName="opacity"
                        calcMode="spline"
                        dur="2"
                        values="1;0;1;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="-.2"
                      ></animate>
                    </circle>
                    <circle
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeWidth="15"
                      r="30"
                      cx="240"
                      cy="100"
                    >
                      <animate
                        attributeName="opacity"
                        calcMode="spline"
                        dur="2"
                        values="1;0;1;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="0"
                      ></animate>
                    </circle>
                  </svg>
                )}
              </button>

              <div className="inline-flex items-center justify-center w-full relative">
                <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-gray-600 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                  Not a member?
                </span>
              </div>
              <span className="flex justify-center text-gray-900">
                <span
                  onClick={SelectJoin}
                  className="underline font-bold cursor-pointer"
                >
                  Join
                </span>
                <span>&nbsp;to unlock the best of Culinary Compass.</span>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
