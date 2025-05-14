import React, { useEffect } from "react";
import { usePopup } from "../ForwardScreenProvider";
import { useUserAuth } from "../UserAuthProvider";

export default function LoggedInUserOptionsDropdown() {
  const { popupRef } = usePopup();
  const { logout } = useUserAuth();

  return (
    <div
      className={`absolute z-1000 bg-white shadow-md rounded-md border border-gray-200 mt-2 w-48 p-4 -right-4`}
      id="profile-popup"
      ref={popupRef}
    >
      <div>
        <ul>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:font-bold">
            Make a recipe
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:font-bold">
            Inventory
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:font-bold">
            Account info
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:font-bold"
            onClick={logout}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}
