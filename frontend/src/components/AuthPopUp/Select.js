import React from "react";
import { usePopup } from "../ForwardScreenProvider";

export default function Select() {
  const { isPopupVisible, hidePopup, setCurrent } = usePopup();

  if (!isPopupVisible) {
    return null;
  }

  const SignInEmail = () => {
    setCurrent("SignInEmail");
  };

  return (
    <div className="flex flex-col w-full h-120">
      <div className="flex justify-end">
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
        <div className="w-100 flex flex-col gap-3 mx-10 mt-3">
          <h1 className="text-3xl inline-block text-blue-500 font-bold">
            Culinary Compass
          </h1>
          <span className="text-2xl inline-block font-bold">
            Sign in to unlock the <br />
            best of Culinary Compass.
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full items-center mt-10">
        <div className="w-100 flex flex-col gap-5">
          <button
            className="border-black border-2 py-2 rounded-3xl relative"
            onClick={SignInEmail}
          >
            <svg
              height="25px"
              width="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 -translate-y-1/2 left-4"
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                  fill="#080341"
                ></path>{" "}
              </g>
            </svg>
            <span className="font-bold">Continue with email</span>
          </button>
        </div>
      </div>
    </div>
  );
}
