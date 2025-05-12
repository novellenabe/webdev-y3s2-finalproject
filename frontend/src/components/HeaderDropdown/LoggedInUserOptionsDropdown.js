import React, { useEffect } from "react";
import { usePopup } from "../ForwardScreenProvider";
import { useUserAuth } from "../UserAuthProvider";

export default function LoggedInUserOptionsDropdown() {
  const { isPopupVisible, hidePopup, setCurrent, popupRef, profileDropdown } =
    usePopup();
  const { logout } = useUserAuth();

  return (
    <div
      className={`absolute z-100 bg-white shadow-md rounded-md border border-gray-200 mt-2 w-48 right-0 ${
        profileDropdown ? "" : "hidden"
      }`}
      id="profile-popup"
      ref={popupRef}
    >
      <ul>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          View Profile
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={logout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
