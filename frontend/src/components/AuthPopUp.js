import React from "react";
import { usePopup } from "./ForwardScreenProvider";
import Select from "./AuthPopUp/Select";
import SignInEmail from "./AuthPopUp/SignInEmail";
import SignUp from "./AuthPopUp/SignUp";
import LoggedInUserOptionsDropdown from "./ForwardScreen/LoggedInUserOptionsDropdown";

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
        {current === "LoggedInUserOptionsDropdown" && (
          <LoggedInUserOptionsDropdown />
        )}
        {current === "Select" && <Select />}
        {current === "SignInEmail" && <SignInEmail />}
        {current === "SignUp" && <SignUp />}
      </div>
    </div>
  );
}
