// VERIFY SESSION ID TOKEN
import { NextResponse } from "next/server";
import { getActiveEmail, verifySessionIdToken } from "../func__";

export async function POST(request) {
  try {
    const LOCAL_SESSIONID = request.headers.get("cookie");
    let sessionIdValue = null;

    if (LOCAL_SESSIONID) {
      const cookies = LOCAL_SESSIONID.split("; ");
      for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        const trimmedName = name.trim(); // Trim whitespace around the name
        if (trimmedName === "sessionId") {
          sessionIdValue = value;
          break;
        }
      }
    }

    const email = await getActiveEmail(sessionIdValue);
    console.log("Current Email Address: " + email);

    const sessionResponse = await verifySessionIdToken(
      sessionIdValue,
      /*data.__currentActiveEmail__*/
      email
    );

    return sessionResponse;
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({
      status: 500,
    });
  }
}
