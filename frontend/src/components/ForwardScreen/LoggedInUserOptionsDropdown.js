import React from "react";
import { usePopup } from "../ForwardScreenProvider";
import { useUserAuth } from "../UserAuthProvider";

export default function LoggedInUserOptionsDropdown() {
  const { isPopupVisible, hidePopup, setCurrent } = usePopup();
  const { logout } = useUserAuth();

  if (!isPopupVisible) {
    return null;
  }

  const LOGOUT_CLOSE = () => {
    console.log("s");
    hidePopup();
    setCurrent("Select");
    logout();
  };

  return (
    <div className="flex flex-col w-full h-120 ">
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
        <div className="w-100 flex gap-5 mx-10 mt-3 h-12 items-center">
          <img
            src="default-pfp.jpeg"
            alt="default-pfp"
            className="block rounded-full h-12"
          />
          <a href="#" className="font-bold underline text-2xl">
            Albert Novell Enabe
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full items-center mt-10">
        <div className="w-100 flex flex-col gap-5">
          <button
            className="border-black border-2 py-2 rounded-3xl relative"
            onClick={LOGOUT_CLOSE}
          >
            <span className="font-bold">Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
