"use client";

import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";

const ForwardScreenContext = createContext();
export const usePopup = () => useContext(ForwardScreenContext);

export const ForwardScreenProvider = ({ children }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const popupRef = useRef(null);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  /* This will close all forward screens */
  const hidePopup = () => {
    setIsPopupVisible(false);
    setProfileDropdown(false);
    resetCurrent();
  };

  const [current, setCurrent] = useState("Select");

  const resetCurrent = () => {
    setCurrent("Select");
  };

  useEffect(() => {
    if (isPopupVisible || profileDropdown) {
      if (isPopupVisible) {
        document.body.classList.add("overflow-hidden");
      }

      document.body.focus();
    } else {
      if (isPopupVisible) {
        document.body.classList.remove("overflow-hidden");
      }
    }

    const handleClickOutside = (event) => {
      if (
        (isPopupVisible || profileDropdown) &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        hidePopup();
      }
    };

    const handleEscapeButtonOutside = (event) => {
      if (
        (isPopupVisible || profileDropdown) &&
        event.keyCode === 27 &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        hidePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeButtonOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeButtonOutside);
      document.body.classList.remove("overflow-hidden"); // Cleanup
    };
  }, [isPopupVisible, profileDropdown, hidePopup]);

  return (
    <ForwardScreenContext.Provider
      value={{
        isPopupVisible,
        setIsPopupVisible,
        showPopup,
        hidePopup,
        popupRef,
        current,
        setCurrent,
        resetCurrent,
        profileDropdown,
        setProfileDropdown,
      }}
    >
      {children}
    </ForwardScreenContext.Provider>
  );
};
