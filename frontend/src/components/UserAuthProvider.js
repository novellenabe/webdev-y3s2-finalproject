"use client";

import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";

const UserAuthContext = createContext();
export const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentActiveEmail, setCurrentActiveEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  //const router = useRouter();

  // DONT USE
  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(true);
        setCurrentActiveEmail("novell"); //setCurrentActiveEmail(data.user);
        localStorage.setItem("authToken", "TOKEN"); //localStorage.setItem("authToken", data.token);
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsLoggedIn(false);
      setCurrentActiveEmail(null);
    } finally {
      setLoading(false);
    }
  };

  // DONT USE
  const signup = async (userData) => {
    try {
      setLoading(true);
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Signup successful");
        //router.push("/login");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/auth/clear-sessionid-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // TODO: PUT AUTHORIZATION IF NEEDED
        },
      });
      if (response.ok) {
        console.log("Session Cleared!");
        setIsLoggedIn(false);
        setCurrentActiveEmail(null);
        console.log(isLoggedIn);
      } else {
        console.log("Oops. Something went wrong.");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  /* THIS FUNCTION CHECKS IF USER HAS A VALID SESSION_ID */

  useEffect(() => {
    console.log("CHECK SESSION_ID");

    const token = localStorage.getItem("authToken");
    //const data = { __currentActiveEmail__: currentActiveEmail };
    const verifySessionId = async () => {
      try {
        const response = await fetch("/api/auth/verify-sessionid-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          /*body: JSON.stringify(data),*/
        });

        if (response.ok) {
          console.log("Session matched!");
          setIsLoggedIn(true);
        } else {
          console.log("Session doesn't match!");
        }
      } catch (error) {
        console.error("Token verification error:", error);
        setIsLoggedIn(false);
        setCurrentActiveEmail(null);
      } finally {
        setLoading(false);
      }
    };

    verifySessionId();
  }, []);

  const value = {
    isLoggedIn,
    currentActiveEmail,
    login,
    setIsLoggedIn,
    logout,
    signup,
    loading,
    setCurrentActiveEmail,
  };

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
