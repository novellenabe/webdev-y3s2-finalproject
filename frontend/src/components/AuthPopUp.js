import React from "react";
import { usePopup } from "./ForwardScreenProvider";
import Select from "./AuthPopUp/Select";
import SignInEmail from "./AuthPopUp/SignInEmail";
import SignUp from "./AuthPopUp/SignUp";

export default function AuthPopUp() {
  const { isPopupVisible, popupRef, current } = usePopup();

  if (!isPopupVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid #ccc",
          zIndex: 1000,
        }}
        ref={popupRef}
        className="h-full w-full md:rounded-2xl md:h-auto md:w-auto"
      >
        {current === "Select" && <Select />}
        {current === "SignInEmail" && <SignInEmail />}
        {current === "SignUp" && <SignUp />}
      </div>
    </div>
  );
  //LoggedInUserOptions;

  /*
  return current === "LoggedInUserOptions" ? (
    <div
      className={`absolute z-10 bg-white shadow-md rounded-md border border-gray-200 mt-2 w-48 ${
        isPopupVisible ? "" : "hidden"
      }`}
      id="profile-popup"
      ref={popupRef}
    >
      <ul>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          View Profile
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
      </ul>
    </div>
  ) : (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid #ccc",
          zIndex: 1000,
        }}
        ref={popupRef}
        className="h-full w-full md:rounded-2xl md:h-auto md:w-auto"
      >
        {current === "Select" && <Select />}
        {current === "SignInEmail" && <SignInEmail />}
        {current === "SignUp" && <SignUp />}
      </div>
    </div>
  );*/
}
