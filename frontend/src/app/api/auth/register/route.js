import { NextResponse } from "next/server";
import { validateFields, validateEmail, registerAccount } from "../func__";

export async function POST(request) {
  try {
    const data = await request.json();

    const fieldResponse = await validateFields(data);
    if (fieldResponse.status !== 200) return fieldResponse;

    const emailResponse = await validateEmail(data);
    if (emailResponse.status !== 200) return emailResponse;

    const registerAccountResponse = await registerAccount(data);
    if (registerAccountResponse.status !== 200) return registerAccountResponse;

    return NextResponse.json(
      { message: `${data.email} successfully registerd!` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({
      status: 500,
    });
  }
}
