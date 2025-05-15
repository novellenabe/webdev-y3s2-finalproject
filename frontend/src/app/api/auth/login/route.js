// LOGIN
import { NextResponse } from "next/server";
import { login, startSession } from "../func__";

export async function POST(request) {
  try {
    const data = await request.json();
    const loginResponse = await login(data);

    if (loginResponse.status !== 200) return loginResponse;

    //const clientId = crypto.randomUUID();
    //sessionStorage.setItem("clientId", clientId);
    //console.log(clientId);
    //return NextResponse.json({ status: 200 });
    return startSession(data);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({
      status: 500,
    });
  }
}
