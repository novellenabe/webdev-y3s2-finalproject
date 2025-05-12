import { NextResponse } from "next/server";
import { endSession } from "../func__";
import { cookies } from "next/headers";

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

    //cookies().delete("sessionId"); // Simpler method in Next.js
    const data = await endSession(sessionIdValue);
    return data;
  } catch (error) {
    return NextResponse.json({
      status: 500,
    });
  }
}
